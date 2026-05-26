# Padrão Editorial e Estrutural para `src/content/docs/`

Data de definição: `2026-05-26`

## Objetivo

Definir um padrão único para a documentação publicada em `src/content/docs/`, usando linguagem de produto SaaS premium, com foco em clareza operacional, valor de negócio e consistência de navegação.

Este padrão será a referência para todas as próximas reescritas.

## Princípios editoriais

### 1. Escrever como documentação de produto, não como rascunho técnico

Cada página deve parecer parte de uma central de ajuda premium:

- linguagem clara, segura e consultiva;
- foco em resultado prático;
- explicação do impacto operacional da tela;
- orientação suficiente para uso real, sem virar transcrição da interface.

### 2. Explicar decisão e benefício, não apenas ação

O manual-base descreve bem o que existe na tela. A versão publicada deve ir além:

- o que a tela ajuda a resolver;
- quando ela deve ser usada;
- o que observar antes de agir;
- que tipo de ganho operacional ou comercial ela traz.

### 3. Reduzir tom burocrático

Evitar páginas no formato:

- "Objetivo da tela";
- "O que existe na tela";
- "Perguntas e respostas" como bloco rígido em toda página.

Preferir linguagem mais natural:

- `Para que serve`
- `Quando usar`
- `O que você encontra`
- `Como usar`
- `O que observar`
- `Benefício de uso`
- `Dúvidas comuns`

### 4. Tratar a documentação como jornada

As páginas não devem funcionar isoladas. Sempre que fizer sentido, devem indicar:

- a etapa anterior;
- o próximo passo recomendado;
- páginas relacionadas da mesma jornada.

### 5. Preservar precisão sem inflar texto

O tom deve ser premium, mas não publicitário. O texto precisa:

- ser elegante, mas objetivo;
- evitar promessas vagas;
- evitar repetição de sinônimos sem ganho real;
- manter coerência com a interface existente.

## Voz e tom

### Características desejadas

- consultivo;
- profissional;
- seguro;
- orientado a operação;
- orientado a decisão.

### O que evitar

- tom excessivamente promocional;
- frases genéricas como "revolucione sua operação";
- excesso de perguntas e respostas mecânicas;
- enumeração literal de todos os campos quando isso não ajuda o usuário;
- linguagem interna de implementação.

### Exemplo de transformação de tom

Fraco:

> Esta tela mostra os campos disponíveis para cadastro.

Melhor:

> Esta tela concentra a base cadastral do empreendimento e define os dados que sustentam ativação, apresentação comercial e consistência da publicação.

## Estrutura base obrigatória por página

Toda página de funcionalidade deve seguir esta estrutura mínima, com pequenas variações conforme o tipo de conteúdo.

### 1. Frontmatter

Padrão:

```mdx
---
title: Nome da Página
description: Resumo curto, objetivo e orientado ao benefício real.
sidebar:
  order: N
---
```

Regras:

- `title` deve usar nomenclatura final da navegação;
- `description` deve caber em uma leitura rápida e explicar utilidade real;
- `sidebar.order` deve refletir a ordem final da seção, não a ordem do manual-base.

### 2. Caixa de rota

Padrão preferencial:

```mdx
<div class="doc-route-box">
  <p class="doc-route-label">Como Acessar</p>
  <code>https://admin.standdigital.com.br/rota</code>
</div>
```

Regras:

- usar `Como Acessar` como rótulo padrão;
- evitar alternar com `Rota base`, salvo quando a página depender claramente de parâmetro dinâmico;
- quando houver rota dinâmica, manter o mesmo rótulo e explicar o parâmetro na `code`;
- usar `doc-route-note` apenas quando houver contexto relevante de acesso, token, permissão ou fluxo indireto.

### 3. Abertura funcional

Primeira seção obrigatória:

- `## Para que serve`

Função:

- explicar a utilidade principal da tela;
- situar a página dentro da operação;
- evitar definição curta e seca demais.

### 4. Seção de leitura prática da tela

Escolher uma conforme o caso:

- `## O que você encontra`
- `## O que você configura`
- `## O que a tela mostra na prática`
- `## O que pode ser feito aqui`

Função:

- organizar os elementos da tela em grupos de uso;
- priorizar blocos relevantes, não listar tudo sem critério.

### 5. Fluxo operacional

Seção obrigatória:

- `## Como usar`

Formato:

- lista numerada simples para fluxos curtos;
- componente `<Steps>` para fluxos com leitura mais guiada ou interpretativa.

### 6. Camada de valor ou interpretação

Escolher uma conforme o tipo de página:

- `## Benefício de uso`
- `## O que observar`
- `## Como interpretar`
- `## Como usar isso na gestão`

Função:

- transformar a página em guia de decisão, não só de navegação.

### 7. Encerramento contextual

Opcional, mas recomendado:

- `## Dúvidas comuns`
- `## Limitações importantes`
- `## Próximos passos recomendados`

Função:

- remover ambiguidade;
- preparar a transição para páginas relacionadas.

## Estruturas por tipo de página

### Tipo A - Páginas simples de acesso ou perfil

Exemplos:

- login;
- suporte;
- meu perfil;
- recuperar senha.

Estrutura recomendada:

1. `Para que serve`
2. `O que você encontra`
3. `Como usar`
4. `Benefício de uso`
5. `Dúvidas comuns` se houver fricção previsível

### Tipo B - Páginas de configuração operacional

Exemplos:

- ficha técnica;
- unidades;
- ajustes;
- configuração de integração.

Estrutura recomendada:

1. `Para que serve`
2. `O que você configura`
3. `Como usar`
4. `O que observar antes de salvar` ou `Atenção`
5. `Benefício de uso`

### Tipo C - Páginas de conteúdo e publicação comercial

Exemplos:

- mídias do empreendimento;
- compartilháveis;
- playbooks;
- redator inteligente.

Estrutura recomendada:

1. `Para que serve`
2. `O que você gerencia aqui`
3. `Como usar`
4. `Boas práticas`
5. `Benefício de uso`

### Tipo D - Páginas analíticas e dashboards

Exemplos:

- métricas e insights;
- analytics overview;
- analytics de páginas;
- compartilhamento de corretores.

Estrutura recomendada:

1. `Para que serve`
2. `O que a tela mostra na prática`
3. `Como usar`
4. `Como interpretar`
5. `Sinais de alerta`, `Diagnósticos rápidos` ou `Como usar isso na gestão`
6. `Benefício de uso`

### Tipo E - Páginas de exceção, suporte ou troubleshooting

Exemplos:

- acesso negado;
- página não encontrada;
- auditoria;
- simulador.

Estrutura recomendada:

1. `Para que serve`
2. `Quando usar`
3. `Como agir`
4. `O que observar`
5. `Limitações importantes` ou `Dúvidas comuns`

## Componentes MDX aprovados

Componentes já usados com boa qualidade e que devem servir de base:

- `Steps` para fluxos guiados;
- `CardGrid` e `Card` para diagnósticos, categorias ou cenários;
- `Aside` para alertas, notas e recomendações de leitura.

## Critério de uso dos componentes

### `Steps`

Usar quando:

- o fluxo exige interpretação;
- cada passo precisa de complemento;
- a página tem caráter de método.

Evitar quando:

- bastam 3 ou 4 passos simples em lista numerada.

### `CardGrid` e `Card`

Usar quando:

- houver comparação entre cenários;
- a leitura ganhar clareza com blocos separados;
- a página tratar diagnósticos, tipos de uso ou perfis de situação.

Evitar quando:

- o conteúdo é apenas uma lista simples.

### `Aside`

Usar quando:

- existir alerta real;
- houver limitação importante;
- valer indicar uma leitura relacionada.

Evitar quando:

- a nota só repetir o corpo do texto.

## Convenções de nomenclatura

### Seções

Padronizar os cabeçalhos principais com este vocabulário:

- `Para que serve`
- `Quando usar`
- `O que você encontra`
- `O que você configura`
- `O que a tela mostra na prática`
- `Como usar`
- `Como interpretar`
- `O que observar`
- `Benefício de uso`
- `Dúvidas comuns`
- `Próximos passos recomendados`

### Rotas

- preferir `Como Acessar` em vez de alternar entre rótulos;
- exibir URL final do produto sempre que a página tiver acesso direto;
- para rotas dinâmicas, mostrar placeholder legível como `<id-do-empreendimento>`.

### Títulos

- manter os títulos da navegação claros e orientados ao usuário final;
- evitar nomes internos de implementação;
- renomear apenas quando a nova nomenclatura estiver editorialmente mais forte e semanticamente mais precisa.

## Critérios de profundidade

### O que toda página deve responder

1. Para que esta tela existe?
2. Em que momento da operação ela entra?
3. O que o usuário consegue fazer nela?
4. O que precisa ser observado para usar bem?
5. Qual ganho operacional ou comercial ela traz?

### O que nem toda página precisa ter

- FAQ formal completo;
- listagem de todos os campos da interface;
- exemplos extensos;
- bloco de interpretação estratégica quando a tela é puramente transacional.

## Regras para migração do conteúdo do `manual/`

### Converter, não copiar

O conteúdo-fonte deve ser tratado como base de informação. A publicação deve:

- resumir trechos redundantes;
- reorganizar a informação por utilidade;
- elevar o texto para padrão consultivo;
- remover repetições mecânicas;
- manter fidelidade funcional.

### Aproveitar o que já está melhor na docs publicada

Quando uma página em `src/content/docs/` já estiver mais madura do que o manual-base:

- preservar a estrutura existente;
- incorporar apenas os trechos do manual que realmente acrescentarem precisão;
- não regredir o tom editorial.

### Corrigir arquitetura junto com reescrita

Se a página estiver na seção errada, a migração deve considerar:

- posição na navegação;
- slug;
- links internos;
- coerência com o índice da seção.

## Critérios de aceitação por página

Uma página só pode ser considerada concluída quando:

- estiver na seção correta;
- tiver frontmatter consistente;
- usar a caixa de rota no padrão definido;
- tiver abertura funcional clara;
- tiver fluxo de uso compreensível;
- tiver camada de benefício, interpretação ou cautela adequada ao tipo da página;
- estiver com tom consistente com documentação premium;
- não repetir o manual-base de forma bruta;
- estiver com links internos coerentes com a arquitetura final.

## Decisão final desta etapa

Status: `concluída`

Padrão adotado para as próximas etapas:

- linguagem consultiva e orientada a valor;
- estrutura modular por tipo de página;
- `Como Acessar` como rótulo padrão de rota;
- uso seletivo de `Steps`, `CardGrid`, `Card` e `Aside`;
- migração por reescrita editorial, não por cópia literal do manual-base.
