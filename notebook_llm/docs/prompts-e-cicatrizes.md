# Engenharia de Prompts e Cicatrizes

Este arquivo documenta experimentos de prompts, os problemas encontrados e as melhorias aplicadas.  
A ideia é mostrar o **processo de raciocínio** e não apenas o resultado final.

---

## 1. Perguntas Estratégicas Iniciais

Algumas perguntas que guiaram os estudos:

- Como usar LLMs como **par-programmer** para refatorar código legado (especialmente em Node.js / Java)?
- Que tipo de prompt leva a **melhor cobertura de testes unitários** a partir de código existente?
- Como estruturar prompts de **revisão de PR** com foco em:
  - segurança
  - performance
  - legibilidade e padrões de código
- Até onde é seguro confiar em respostas de IA para:
  - decisões de arquitetura
  - desenho de APIs
  - escrita de documentação técnica?

Essas perguntas ajudaram a definir os casos de uso principais e os cenários de teste de prompts.

---

## 2. Caso: Geração de Testes Automatizados

### 2.1. Versão Inicial do Prompt (V1) – Genérico

> Crie testes para esta função.

**Problemas observados:**

- O modelo gerou testes com:
  - Ferramentas aleatórias (frameworks não utilizados no projeto).
  - Cenários superficiais (apenas caso “feliz”).
- Ausência de:
  - Casos de erro, borda e inputs inválidos.
  - Nomes descritivos para métodos de teste.

**Cicatrizes:**

- Entendimento de que prompts genéricos levam a respostas superficiais.
- Falta de especificação da stack (ex.: Jest, JUnit) gera incompatibilidades com o projeto.

### 2.2. Versão Melhorada (V2) – Guiada

> Você é um(a) desenvolvedor(a) experiente em Node.js.  
> Analise a função abaixo e gere testes unitários usando **Jest**, cobrindo:  
> - cenário de sucesso,  
> - cenários de erro (exceções, retornos inválidos),  
> - casos de borda (valores nulos, vazios, limites).  
> Formato de saída: apenas o código dos testes em um único bloco Markdown.  
> Código:  
> ```js
> // código aqui
> ```

**Melhorias percebidas:**

- Testes passaram a usar Jest corretamente.
- Maior variedade de cenários contemplados.
- Estrutura mais próxima do padrão de testes já adotado no projeto.

### 2.3. Ajustes Finais (V3) – Mitigando Problemas

Novos problemas detectados durante o uso:

- O modelo, às vezes, ainda sugeria bibliotecas adicionais desnecessárias.
- Alguns casos de borda continuavam ausentes.

**Ajustes no prompt:**

- Inclusão de restrições explícitas:

> Use **estritamente Jest** como framework de testes, sem importar outras bibliotecas.  
> Antes de gerar o código, liste em bullets os cenários de teste que você vai cobrir.

**Resultado:**

- Testes mais alinhados ao padrão do projeto.
- Lista de cenários ajuda a revisar rapidamente se algo importante foi esquecido.

---

## 3. Caso: Revisão de Pull Request Focada em Segurança

### 3.1. Prompt Inicial

> Analise o diff a seguir e aponte problemas de segurança.

**Problemas observados:**

- Respostas vagas, com alertas genéricos (“pode haver risco de injeção”) sem apontar line numbers ou trechos específicos.
- Alguns “falsos positivos” (apontando vulnerabilidades onde não havia).

### 3.2. Prompt Refinado

> Você é um(a) revisor(a) de código focado em **segurança de APIs REST**.  
> Analise o diff abaixo buscando especificamente:  
> - injeção de SQL,  
> - exposição de dados sensíveis,  
> - validação insuficiente de entradas.  
> Para cada risco encontrado, informe:  
> - trecho de código (ou linha aproximada),  
> - descrição do risco,  
> - sugestão objetiva de correção.  
> Se não encontrar riscos concretos, responda explicitamente: **"Nenhum risco identificado"**.

**Melhorias percebidas:**

- Respostas mais estruturadas, com:
  - identificação clara dos pontos suspeitos,
  - sugestões de mitigação.
- Redução de falsos positivos, pois o modelo agora “assume” que não precisa inventar problemas caso não veja nada concreto.

**Cicatrizes:**

- Foi necessário **forçar explicitamente** a possibilidade de “Nenhum risco identificado” para reduzir respostas inventadas.
- Continua necessário revisar as sugestões manualmente, pois a IA não conhece o contexto completo da aplicação.

---

## 4. Caso: Refatoração de Código Legado

### 4.1. Prompt Inicial

> Reescreva este código de forma melhor.

**Problemas:**

- O modelo às vezes alterava **comportamentos funcionais** não desejados.
- Introdução de padrões de projeto desnecessários para casos simples.
- Falta de explicação das mudanças, dificultando a revisão.

### 4.2. Prompt Refinado

> Atue como arquiteto(a) de software em um sistema backend.  
> Sugira uma refatoração para o código abaixo visando:  
> - redução de acoplamento,  
> - maior coesão,  
> - melhoria da legibilidade.  
> Preserve o comportamento externo da função.  
> Mostre o **código refatorado** e, em seguida, uma explicação em bullets das principais mudanças.

**Resultados e lições:**

- Refatorações mais cuidadosas, com:
  - diminuição de dependências desnecessárias,
  - extração de funções auxiliares.
- A explicação em bullets facilita validar se a refatoração faz sentido para o contexto real.

**Cicatrizes:**

- Mesmo com prompt refinado, ainda é preciso:
  - rodar testes automatizados,
  - checar impacto em integrações,
  - fazer revisão manual quando se trata de áreas sensíveis (pagamentos, segurança, etc.).

---

## 5. Caso: Geração de Documentação Técnica a partir de Código

### 5.1. Prompt Estruturado

> Você é um(a) tech writer especializado(a) em documentação de APIs para desenvolvedores.  
> A partir do código e da descrição abaixo, escreva uma seção de documentação em **Markdown** contendo:  
> - visão geral da funcionalidade,  
> - parâmetros de entrada e saída,  
> - fluxos principais de uso,  
> - um exemplo de requisição e resposta.  
> Tom: conciso, direto, orientado a quem já programa.  
> Código e descrição:  
> ```
// conteúdo aqui
> ```

**Bom funcionamento:**

- Gera seções de documentação bem formatadas em Markdown.
- Ajuda a acelerar a criação de READMEs e docs de endpoints.

**Cicatrizes:**

- Em alguns casos, a IA supõe comportamentos que não existem no código (ex.: campos extras, respostas que não são retornadas).
- Necessário revisar sempre e remover qualquer suposição que não esteja respaldada pelo código ou requisitos.

---

## 6. Padrões Gerais de Aprendizado

Alguns padrões que se repetiram ao longo dos experimentos:

- Prompts **genéricos** geram respostas superficiais e pouco confiáveis.
- Explicitar:
  - papel (ex.: dev sênior, arquiteto, tech writer),
  - contexto (stack, linguagem, tipo de sistema),
  - formato de saída,
  melhora significativamente os resultados.
- É importante deixar claro que:
  - o modelo pode responder “não sei” ou “nenhum problema identificado”,
  - nem sempre é necessário “inventar” algo.
- A validação humana (testes, code review, leitura crítica) continua indispensável.