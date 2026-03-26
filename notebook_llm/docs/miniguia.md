# Miniguia: LLMs no Desenvolvimento de Software

Este miniguia resume os principais conceitos estudados, apresenta um glossário e traz uma biblioteca de prompts reutilizáveis.

---

## 1. Visão Geral Rápida

- **LLMs** são modelos de linguagem capazes de entender e gerar texto e código.
- No contexto de desenvolvimento de software, podem atuar como:
  - par-programmer,
  - assistente de geração/refatoração de código,
  - revisor de PR,
  - gerador de testes e documentação.
- A qualidade das respostas depende fortemente de:
  - bom contexto,
  - prompts bem estruturados,
  - revisão e validação humana.

---

## 2. Principais Casos de Uso para Devs

### 2.1. Geração de Código

- Criação de funções utilitárias, boilerplates e provas de conceito.
- Útil para explorar rapidamente abordagens alternativas de implementação.
- Requer:
  - especificação clara da linguagem, versão e bibliotecas permitidas,
  - revisão manual de lógica e estilo.

### 2.2. Refatoração

- Sugestão de extração de funções, simplificação de condicionais, redução de duplicação.
- Pode auxiliar a aplicar padrões de projeto onde façam sentido (Strategy, Factory, etc.).
- Precisa ser acompanhada por testes automatizados para garantir que o comportamento não mudou.

### 2.3. Revisão de Código (PR Review)

- Ajuda a detectar:
  - inconsistências,
  - smells de código,
  - possíveis brechas de segurança.
- Atua como **primeira linha de revisão**, antes da revisão humana final.
- Não substitui a revisão de alguém que conhece o domínio de negócio.

### 2.4. Geração de Testes

- Proposta de cenários de teste e criação de testes unitários/integrados.
- Pode aumentar a cobertura de testes em código legado.
- Exige:
  - validação dos cenários propostos,
  - ajustes para seguir convenções do time e da base de código.

### 2.5. Documentação

- Criação e manutenção de:
  - READMEs,
  - docs de APIs,
  - comentários explicativos.
- Acelera o processo de documentar funcionalidades recém-implementadas.
- Requer ajuste de tom e conferência de qualquer detalhe técnico descrito.

---

## 3. Limitações e Riscos

- **Alucinações**: o modelo pode inventar APIs, parâmetros, fluxos e detalhes técnicos que não existem.
- **Falta de contexto global**: o LLM não conhece toda a arquitetura, as decisões históricas e os requisitos não funcionais.
- **Questões de privacidade e segurança**:
  - Cuidado ao enviar código proprietário para serviços externos.
  - Verificar termos de uso e políticas de retenção de dados.
- **Dependência excessiva**:
  - Risco de reduzir entendimento profundo do sistema se tudo é delegado à IA.
  - Importante continuar estudando e raciocinando sobre o código manualmente.

---

## 4. Boas Práticas de Uso

- Tratar o modelo como **par-programmer**, nunca como autoridade absoluta.
- Em cada prompt, deixar claro:
  - papel do modelo (dev sênior, arquiteto, tech writer),
  - linguagem/stack (Node.js, Java, Jest, etc.),
  - formato esperado da resposta (código, lista, Markdown).
- Iterar sobre os prompts:
  - começar com versão simples,
  - observar problemas,
  - adicionar restrições e exemplos.
- Validar sempre:
  - executar testes,
  - rodar linters,
  - fazer revisão de código humana, especialmente em partes sensíveis.

---

## 5. Glossário

- **LLM (Large Language Model)**  
  Modelo de linguagem de larga escala treinado em grandes volumes de texto, capaz de entender e gerar linguagem natural e código.

- **Engenharia de Prompts**  
  Prática de desenhar, testar e iterar prompts para obter respostas mais úteis, consistentes e seguras de um modelo de linguagem.

- **Par-programmer de IA**  
  Uso de um LLM como parceiro de programação, sugerindo código, revisando trechos e ajudando a explicar decisões técnicas.

- **Janela de Contexto**  
  Quantidade máxima de texto (código, docs, histórico de conversa) que o modelo consegue considerar em uma interação.

- **Alucinação**  
  Resposta plausível, mas incorreta ou inventada pelo modelo, sem base real no código ou contexto fornecido.

- **RAG (Retrieval-Augmented Generation)**  
  Abordagem em que documentos (código, wiki, RFCs, etc.) são recuperados de uma base e injetados no prompt para que o modelo responda sustentado por essas fontes.

- **Guardrails**  
  Conjunto de práticas, políticas e ferramentas que restringem o comportamento da IA e mitigam riscos (linters, testes, revisão humana, políticas de uso).

---

## 6. Biblioteca de Prompts Reutilizáveis

Abaixo, uma coleção de prompts prontos para uso e customização.

### 6.1. Explicação de Código Legado

> Você é um(a) desenvolvedor(a) sênior em \[LINGUAGEM/STACK\].  
> Explique, passo a passo, o que o código abaixo faz, identificando:  
> - responsabilidades principais,  
> - dependências externas relevantes,  
> - possíveis riscos e débitos técnicos.  
> Ao final, sugira até 5 melhorias de design ou legibilidade.  
> Código:  
> ```\[cole o código aqui\]```

---

### 6.2. Geração de Testes Unitários

> Atue como especialista em testes automatizados em \[LINGUAGEM\] usando \[FRAMEWORK DE TESTE\].  
> Dado o código abaixo, primeiro liste em bullets os **cenários de teste** que você vai cobrir  
> (casos de sucesso, erro e borda).  
> Depois, gere o código dos testes usando **apenas** \[FRAMEWORK\], em um único bloco Markdown.  
> Código:  
> ```\[cole o código aqui\]```

---

### 6.3. Revisão de PR com Foco em Segurança

> Você é um(a) revisor(a) de código focado(a) em segurança de APIs.  
> Analise o diff abaixo buscando:  
> - injeção de SQL,  
> - exposição de dados sensíveis,  
> - falta de validação de entradas,  
> - uso inseguro de autenticação/autorização.  
> Para cada risco encontrado, informe:  
> - trecho de código (ou linha aproximada),  
> - descrição objetiva do risco,  
> - sugestão de correção.  
> Se não encontrar riscos concretos, responda explicitamente: **"Nenhum risco identificado"**.  
> Diff:  
> ```diff
> \[cole o diff aqui\]
> ```

---

### 6.4. Refatoração Orientada a Design

> Atue como arquiteto(a) de software em um sistema \[tipo de sistema\].  
> Sugira uma refatoração para o código abaixo visando:  
> - redução de acoplamento,  
> - maior coesão,  
> - aplicação de padrões de projeto quando fizer sentido.  
> **Preserve o comportamento externo** (contrato público) do código.  
> Retorne:  
> 1. Código refatorado.  
> 2. Uma lista em bullets explicando as principais mudanças.  
> Código:  
> ```\[cole o código aqui\]```

---

### 6.5. Geração de Documentação Técnica

> Você é um(a) tech writer especializado(a) em documentação para desenvolvedores.  
> A partir do código e da descrição abaixo, escreva uma seção de documentação em **Markdown** contendo:  
> - visão geral do que a funcionalidade faz,  
> - parâmetros de entrada e saída,  
> - fluxos de uso típicos,  
> - um exemplo de uso (código ou requisição/resposta).  
> Tom: conciso, direto, voltado para quem já programa.  
> Conteúdo:  
> ```\[cole o código/descrição aqui\]```

---

### 6.6. Prompt para Análise de Arquitetura

> Você é um(a) arquiteto(a) de software experiente.  
> Com base na descrição abaixo, identifique:  
> - principais componentes do sistema,  
> - pontos de acoplamento forte,  
> - riscos de escalabilidade,  
> - possíveis melhorias arquiteturais.  
> Ao final, proponha uma visão de arquitetura alvo em alto nível (componentes e responsabilidades).  
> Descrição do sistema:  
> ```\[cole a descrição aqui\]```

---

### 6.7. Prompt para Planejamento de Refatorações

> Você é um(a) tech lead responsável por reduzir débito técnico em um módulo legado.  
> Com base na descrição e no código abaixo, proponha um **plano incremental de refatoração** em etapas,  
> de forma que:  
> - cada etapa seja pequena e testável,  
> - o sistema continue em produção durante as mudanças,  
> - seja possível medir o impacto de cada etapa (ex.: cobertura de testes, complexidade ciclomática).  
> Retorne o plano em forma de lista numerada.  
> Conteúdo:  
> ```\[cole aqui\]```

---

Este miniguia pode ser expandido com novos prompts e casos de uso conforme novas experiências com LLMs forem surgindo no seu fluxo de trabalho.