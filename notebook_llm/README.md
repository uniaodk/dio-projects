# NotebookLM Temático – Uso de LLMs para Desenvolvimento de Software

## Contexto

Este repositório é um NotebookLM temático sobre **uso de LLMs (Large Language Models) no desenvolvimento de software**.  
O objetivo é estudar como modelos de linguagem podem atuar ao longo do ciclo de desenvolvimento como:

- Par-programmer (programação em par com IA).
- Assistente de código (geração e refatoração).
- Revisor técnico (qualidade, legibilidade, segurança).
- Gerador de documentação e artefatos de apoio (testes, READMEs, exemplos).

O conteúdo aqui foi organizado como um material de estudo contínuo, documentando não só os resultados, mas também o raciocínio, os experimentos de prompts e as “cicatrizes” (erros, falhas e ajustes necessários ao longo do caminho).

## Objetivos de Estudo

- Mapear e exemplificar casos de uso de LLMs em atividades típicas de desenvolvimento de software (backend, testes, documentação, revisão de PR).
- Praticar **engenharia de prompts** aplicada, com foco em clareza, contexto, papel e formato de saída.
- Identificar limitações, riscos e boas práticas para uso responsável e seguro de LLMs em ambientes de desenvolvimento.
- Construir um **miniguia reutilizável** (resumos, glossário e biblioteca de prompts) para revisões futuras e onboarding de pessoas desenvolvedoras em times que adotam IA generativa.

## Estrutura do Repositório

```text
.
├── README.md                 # Contexto, objetivos e visão geral
└── docs
    ├── fontes.md             # Curadoria de fontes utilizadas
    ├── prompts-e-cicatrizes.md  # Engenharia de prompts e lições aprendidas
    └── miniguia.md           # Resumos, glossário e prompts reutilizáveis
```

## Fontes Utilizadas

As principais fontes abertas usadas neste NotebookLM são:

1. **OpenAI – Best practices for prompt engineering with the OpenAI API**  
   - Guia com princípios de prompts claros, delimitação de papéis, exemplos e formatos de saída.  
2. **StackSpot AI – Prompt Engineering Best Practices**  
   - Boas práticas em português, com foco em contexto, instruções explícitas e iteração sistemática de prompts.  
3. **Stack Overflow Blog – Developers with AI assistants need to follow the pair programming model**  
   - Discute o uso de assistentes de IA como pares de programação, reforçando a necessidade de validação humana e testes.  
4. **How AI pair programming compares to traditional code review models**  
   - Compara modelos tradicionais de revisão de código com fluxos que incluem IA, ressaltando riscos, benefícios e guardrails.  
5. **Artigos gerais sobre casos de uso de LLMs**  
   - Referências que listam e exemplificam diferentes aplicações de LLMs em negócios e engenharia de software.

Detalhes e comentários sobre cada fonte estão em [`docs/fontes.md`](docs/fontes.md).

## Como Navegar pelo NotebookLM

- Comece por [`docs/miniguia.md`](docs/miniguia.md) para ter uma visão geral do tema, dos conceitos principais e dos prompts reutilizáveis.
- Consulte [`docs/fontes.md`](docs/fontes.md) se quiser entender as bases teóricas e práticas que embasam o material.
- Explore [`docs/prompts-e-cicatrizes.md`](docs/prompts-e-cicatrizes.md) para ver exemplos concretos de prompts, iterações e troubleshooting.