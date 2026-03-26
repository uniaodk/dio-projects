# Curadoria de Fontes

Este arquivo documenta as principais fontes usadas na construção do NotebookLM, bem como o que foi extraído de cada uma.

## 1. OpenAI – Best practices for prompt engineering

**Tipo:** Documentação técnica / guia de melhores práticas  
**Principais pontos aproveitados:**

- Importância de explicitar o **papel** do modelo (ex.: “Você é um desenvolvedor sênior em Node.js...”).
- Necessidade de definir claramente o **formato de saída** (ex.: “retorne apenas código em um único bloco Markdown”).
- Uso de **exemplos** (few-shot prompting) para guiar o estilo da resposta.
- Recomendação de iterar em cima dos prompts com base no resultado, ajustando linguagem e restrições.

**Aplicações no NotebookLM:**

- Base para os prompts de geração de testes, refatoração e documentação.
- Estrutura dos prompts reutilizáveis, sempre começando com o papel, contexto e formato de saída.

---

## 2. StackSpot AI – Prompt Engineering Best Practices

**Tipo:** Guia prático em português  
**Principais pontos aproveitados:**

- Ênfase em fornecer **contexto suficiente** (código, requisitos, stack tecnológica, linguagem de programação).
- Idéia de tratar a construção de prompts como um processo iterativo e **experimental**, registrando versões e ajustes.
- Sugestão de criar uma **biblioteca de prompts** organizados por caso de uso.

**Aplicações no NotebookLM:**

- Estruturação da seção de “Engenharia de Prompts e Cicatrizes”.
- Organização dos prompts reutilizáveis em categorias (explicação de código, testes, revisão, refatoração, documentação).

---

## 3. Stack Overflow Blog – Developers with AI assistants need to follow the pair programming model

**Tipo:** Artigo de blog técnico  
**Principais pontos aproveitados:**

- A recomendação de encarar o LLM como um **par-programmer**, não como “oráculo infalível”.
- A importância de:
  - **Revisar ativamente** o código sugerido.
  - Rodar **testes automatizados**.
  - Manter o controle das decisões de design e arquitetura com o time humano.
- Sugestão de usar IA para brainstorming, refino e explicação, sem abrir mão de critérios de qualidade.

**Aplicações no NotebookLM:**

- Orientações na parte de boas práticas.
- Construção dos prompts de revisão de PR e refatoração, tratando a IA como revisor.

---

## 4. How AI pair programming compares to traditional code review models

**Tipo:** Artigo analítico / comparativo  
**Principais pontos aproveitados:**

- Comparação entre revisão tradicional (humana) e fluxos apoiados por IA.
- Benefícios: ganho de velocidade, descoberta de problemas óbvios mais rapidamente, suporte a devs menos experientes.
- Riscos: falsa sensação de segurança, viés do modelo, falta de entendimento do contexto do sistema.
- Necessidade de **guardrails**:
  - Linters, testes obrigatórios.
  - Revisão humana para código sensível.
  - Políticas de privacidade e compliance.

**Aplicações no NotebookLM:**

- Seção de limitações e riscos.
- Ideia de usar a IA como um “primeiro filtro” na revisão, sem substituir o revisor humano.

---

## 5. Artigos gerais sobre casos de uso de LLMs

**Tipo:** Guias de “use cases” e panoramas de mercado  
**Principais pontos aproveitados:**

- Lista de aplicações típicas:
  - Atendimento ao cliente, análise de texto, sumarização.
  - No contexto de desenvolvimento: geração de código, explicação de código, automação de tarefas repetitivas.
- Visão macro da adoção de LLMs em empresas e times de engenharia.
- Reforço da importância de **experimentos controlados** em ambientes de desenvolvimento, com métricas de produtividade e qualidade.

**Aplicações no NotebookLM:**

- Seção de “Casos de uso principais” no miniguia.
- Argumentação sobre por que vale a pena estudar o tema do ponto de vista de carreira e maturidade técnica.

---

## Como as Fontes se Complementam

- A documentação oficial e guias de boas práticas fornecem **fundação conceitual** para prompt engineering.
- Artigos de blog e comparativos de pair programming com IA trazem **casos práticos** e alertas sobre riscos reais.
- Guias de casos de uso completam a visão mostrando **onde** e **como** LLMs já estão sendo utilizados, especialmente em engenharia de software.

Este NotebookLM não replica o conteúdo das fontes, mas **destila** o que é mais relevante para o dia a dia de desenvolvimento de software.