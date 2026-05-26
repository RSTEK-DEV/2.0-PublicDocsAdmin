# Auditoria de Cobertura entre `manual/` e `src/content/docs/`

Data da auditoria: `2026-05-26`

## Objetivo

Mapear com precisão o que já existe no manual-base em `manual/blocos/**` e o que já foi publicado em `src/content/docs/**`, separando:

- equivalências diretas;
- equivalências com mudança de nome ou seção;
- lacunas reais;
- conteúdos extras já criados na documentação publicada.

## Resumo executivo

- o manual-base possui `40` arquivos de conteúdo de tela, desconsiderando os `README.md` de bloco;
- a documentação publicada possui `42` páginas `.mdx`, desconsiderando os `index.mdx` de seção;
- a cobertura funcional principal está quase completa, mas a arquitetura publicada ainda não está coerente com a organização editorial desejada;
- existem páginas do bloco de conteúdo comercial publicadas dentro da seção `03-configuracao-do-empreendimento`, o que mistura configuração estrutural com produção comercial;
- há uma lacuna real em `pagina-nao-encontrada`, referenciada no índice publicado, mas sem arquivo correspondente;
- há uma divergência de slug em `compartilhamento-de-corretores`, porque o índice aponta para `/compartilhamentos-de-corretores/` e o arquivo real publicado é `compartilhamento-de-corretores.mdx`;
- o bloco 05 já possui conteúdo estratégico extra na documentação publicada, que não existe no manual-base e deve ser preservado na próxima etapa.

## Classificação usada

- `Direto`: existe correspondência clara entre origem e destino.
- `Renomeado`: mesmo tema, mas com nome, slug ou posicionamento alterado.
- `Reorganizar`: conteúdo existe, mas está na seção errada.
- `Lacuna`: existe no manual-base e não existe como página publicada.
- `Extra publicado`: existe na documentação publicada e não veio do manual-base.

## Mapa por bloco

### Bloco 01 - Acesso e conta

| Manual | Destino publicado | Classificação | Observação |
|---|---|---|---|
| `bloco-01-acesso-conta/login.md` | `01-acesso-e-conta/login.mdx` | Direto | |
| `bloco-01-acesso-conta/selecao-de-empresa.md` | `01-acesso-e-conta/selecao-de-empresa.mdx` | Direto | |
| `bloco-01-acesso-conta/pagina-inicial.md` | `01-acesso-e-conta/pagina-inicial.mdx` | Direto | |
| `bloco-01-acesso-conta/suporte.md` | `01-acesso-e-conta/suporte.mdx` | Direto | |
| `bloco-01-acesso-conta/meu-perfil.md` | `01-acesso-e-conta/meu-perfil.mdx` | Direto | |
| `bloco-01-acesso-conta/minhas-preferencias.md` | `01-acesso-e-conta/minhas-preferencias.mdx` | Direto | |

Diagnóstico do bloco:

- cobertura funcional completa;
- bom candidato para servir de bloco-piloto de padronização editorial.

### Bloco 02 - Empreendimentos

| Manual | Destino publicado | Classificação | Observação |
|---|---|---|---|
| `bloco-02-inicio-empreendimentos/empreendimentos.md` | `02-empreendimentos/empreendimentos.mdx` | Direto | |
| `bloco-02-inicio-empreendimentos/novo-empreendimento.md` | `02-empreendimentos/novo-empreendimento.mdx` | Direto | |
| `bloco-02-inicio-empreendimentos/contratar-projeto.md` | `02-empreendimentos/contratar-projeto.mdx` | Direto | |

Diagnóstico do bloco:

- cobertura funcional completa;
- sem divergências estruturais relevantes nesta fase.

### Bloco 03 - Configuração do empreendimento

| Manual | Destino publicado | Classificação | Observação |
|---|---|---|---|
| `bloco-03-edicao-empreendimento/ficha-tecnica.md` | `03-configuracao-do-empreendimento/ficha-tecnica.mdx` | Direto | |
| `bloco-03-edicao-empreendimento/gerenciador-de-telas.md` | `03-configuracao-do-empreendimento/gerenciador-de-telas.mdx` | Direto | |
| `bloco-03-edicao-empreendimento/configuracao-do-empreendimento.md` | `03-configuracao-do-empreendimento/configuracao-do-empreendimento.mdx` | Direto | |
| `bloco-03-edicao-empreendimento/unidades.md` | `03-configuracao-do-empreendimento/unidades.mdx` | Direto | |
| `bloco-03-edicao-empreendimento/estagio-de-obra.md` | `03-configuracao-do-empreendimento/estagio-de-obra.mdx` | Direto | |

Diagnóstico do bloco:

- cobertura funcional completa;
- a seção `03-configuracao-do-empreendimento` está inchada porque absorveu também páginas do bloco 04.

### Bloco 04 - Conteúdo, mídias e publicação comercial

| Manual | Destino publicado | Classificação | Observação |
|---|---|---|---|
| `bloco-04-conteudo-midias-publicacao/midias-do-empreendimento.md` | `03-configuracao-do-empreendimento/midias-do-empreendimento.mdx` | Reorganizar | Hoje está na seção errada. |
| `bloco-04-conteudo-midias-publicacao/compartilhaveis.md` | `03-configuracao-do-empreendimento/compartilhaveis.mdx` | Reorganizar | Hoje está na seção errada. |
| `bloco-04-conteudo-midias-publicacao/playbooks.md` | `03-configuracao-do-empreendimento/playbooks.mdx` | Reorganizar | Hoje está na seção errada. |
| `bloco-04-conteudo-midias-publicacao/resumo-de-vendas.md` | `04-conteudo-comercial/resumo-de-vendas.mdx` | Direto | |
| `bloco-04-conteudo-midias-publicacao/redator-inteligente.md` | `04-conteudo-comercial/redator-inteligente.mdx` | Direto | |

Diagnóstico do bloco:

- cobertura funcional de telas existe, mas a arquitetura editorial está quebrada;
- a seção `04-conteudo-comercial` hoje cobre apenas ferramentas auxiliares e deixa de fora mídias, compartilháveis e playbooks;
- a etapa de migração deve corrigir estrutura e navegação ao mesmo tempo.

### Bloco 05 - Estatísticas e inteligência

| Manual | Destino publicado | Classificação | Observação |
|---|---|---|---|
| `bloco-05-inteligencia-analytics/metricas-e-insights.md` | `05-estatisticas-e-inteligencia/metricas-e-insights.mdx` | Direto | Há divergência de rota entre singular e plural em `compartilhamento(s)`. |
| `bloco-05-inteligencia-analytics/inteligencia-de-corretores.md` | `05-estatisticas-e-inteligencia/compartilhamento-de-corretores.mdx` | Renomeado | O nome publicado mudou de foco para compartilhamentos. |
| `bloco-05-inteligencia-analytics/analytics-overview.md` | `05-estatisticas-e-inteligencia/analytics-overview.mdx` | Direto | |
| `bloco-05-inteligencia-analytics/analytics-retencao.md` | `05-estatisticas-e-inteligencia/analytics-retencao.mdx` | Direto | |
| `bloco-05-inteligencia-analytics/analytics-paginas.md` | `05-estatisticas-e-inteligencia/analytics-paginas.mdx` | Direto | |
| `bloco-05-inteligencia-analytics/analytics-demografico.md` | `05-estatisticas-e-inteligencia/analytics-demografico.mdx` | Direto | |
| `bloco-05-inteligencia-analytics/analytics-dispositivos.md` | `05-estatisticas-e-inteligencia/analytics-dispositivos.mdx` | Direto | |
| `bloco-05-inteligencia-analytics/glossario-de-metricas.md` | `05-estatisticas-e-inteligencia/glossario-de-metricas.mdx` | Direto | |
| `bloco-05-inteligencia-analytics/plano-especial-analytics.md` | sem destino direto | Lacuna ou absorção editorial | Precisa decisão: publicar como página própria ou incorporar em páginas estratégicas. |

Extras já publicados nesta seção:

| Página publicada | Classificação | Observação |
|---|---|---|
| `05-estatisticas-e-inteligencia/como-usar-estatisticas.mdx` | Extra publicado | Página estratégica introdutória. |
| `05-estatisticas-e-inteligencia/leitura-do-funil-comercial-imobiliario.mdx` | Extra publicado | Página de interpretação de conversão. |
| `05-estatisticas-e-inteligencia/decisoes-por-fase-do-lancamento.mdx` | Extra publicado | Página consultiva por estágio do produto. |
| `05-estatisticas-e-inteligencia/diagnostico-de-canais-e-campanhas.mdx` | Extra publicado | Página consultiva para mídia e origem de tráfego. |

Diagnóstico do bloco:

- é o bloco mais maduro editorialmente;
- exige harmonização, não substituição cega;
- o slug interno da página de corretores está inconsistente com o link do índice da seção.

### Bloco 06 - Corretores e equipe

| Manual | Destino publicado | Classificação | Observação |
|---|---|---|---|
| `bloco-06-corretores-equipe/corretores.md` | `06-equipe-e-permissoes/corretores.mdx` | Direto | |
| `bloco-06-corretores-equipe/equipe-interna.md` | `06-equipe-e-permissoes/equipe-interna.mdx` | Direto | |
| `bloco-06-corretores-equipe/usuarios-da-equipe.md` | `06-equipe-e-permissoes/usuarios-da-equipe.mdx` | Direto | |

Diagnóstico do bloco:

- cobertura funcional completa;
- nomenclatura de seção está adequada para linguagem mais premium.

### Bloco 07 - Configurações e integrações

| Manual | Destino publicado | Classificação | Observação |
|---|---|---|---|
| `bloco-07-configuracoes-administrativas/ajustes.md` | `07-configuracoes-e-integracoes/ajustes.mdx` | Direto | |
| `bloco-07-configuracoes-administrativas/integracoes.md` | `07-configuracoes-e-integracoes/integracoes.mdx` | Direto | |
| `bloco-07-configuracoes-administrativas/configuracao-de-integracao.md` | `07-configuracoes-e-integracoes/configuracao-de-integracao-cvcrm.mdx` | Renomeado | O destino já assume CVCRM como recorte específico. |

Diagnóstico do bloco:

- cobertura funcional completa;
- renomeação está coerente, mas o conteúdo precisa deixar explícito que o artigo é específico de CVCRM.

### Bloco 08 - Auditoria, simulação e auxiliares

| Manual | Destino publicado | Classificação | Observação |
|---|---|---|---|
| `bloco-08-auditoria-simulacao-auxiliares/auditoria-logs-ativos.md` | `08-auditoria-e-suporte/auditoria-logs-ativos.mdx` | Direto | |
| `bloco-08-auditoria-simulacao-auxiliares/auditoria-cold-storage.md` | `08-auditoria-e-suporte/auditoria-cold-storage.mdx` | Direto | |
| `bloco-08-auditoria-simulacao-auxiliares/simulador.md` | `08-auditoria-e-suporte/simulador.mdx` | Direto | |
| `bloco-08-auditoria-simulacao-auxiliares/recuperar-senha.md` | `08-auditoria-e-suporte/recuperar-senha.mdx` | Direto | |
| `bloco-08-auditoria-simulacao-auxiliares/acesso-negado.md` | `08-auditoria-e-suporte/acesso-negado.mdx` | Direto | |
| `bloco-08-auditoria-simulacao-auxiliares/pagina-nao-encontrada.md` | sem destino publicado | Lacuna | O índice da seção já aponta para esta página, mas o arquivo não existe. |

Diagnóstico do bloco:

- quase completo;
- existe uma lacuna concreta e já exposta pela navegação publicada.

## Inconsistências encontradas

### 1. Conteúdo do bloco 04 está alocado na seção errada

Arquivos afetados:

- `src/content/docs/03-configuracao-do-empreendimento/midias-do-empreendimento.mdx`
- `src/content/docs/03-configuracao-do-empreendimento/compartilhaveis.mdx`
- `src/content/docs/03-configuracao-do-empreendimento/playbooks.mdx`

Impacto:

- a arquitetura da documentação perde clareza;
- a seção 03 mistura setup estrutural com ativação comercial;
- a seção 04 fica subdimensionada e passa uma promessa menor do que o produto entrega.

### 2. Link quebrado ou inconsistente em estatísticas

Origem:

- `src/content/docs/05-estatisticas-e-inteligencia/index.mdx`

Problema:

- o índice aponta para `/05-estatisticas-e-inteligencia/compartilhamentos-de-corretores/`;
- o arquivo existente é `src/content/docs/05-estatisticas-e-inteligencia/compartilhamento-de-corretores.mdx`.

Impacto:

- navegação inconsistente;
- risco de rota inválida na documentação publicada.

### 3. Página referenciada sem arquivo publicado

Origem:

- `src/content/docs/08-auditoria-e-suporte/index.mdx`

Problema:

- o índice aponta para `/08-auditoria-e-suporte/pagina-nao-encontrada/`;
- não existe `src/content/docs/08-auditoria-e-suporte/pagina-nao-encontrada.mdx`.

Impacto:

- link quebrado na navegação;
- lacuna funcional visível para o usuário.

### 4. Divergência de conceito no artigo de corretores

Origem do manual:

- `inteligencia-de-corretores.md`

Destino atual:

- `compartilhamento-de-corretores.mdx`

Impacto:

- a mudança pode ser válida, mas precisa ser tratada conscientemente;
- é necessário decidir se a página publicada fala sobre performance individual ampla ou apenas compartilhamentos.

### 5. Página do manual sem decisão editorial no site publicado

Arquivo:

- `manual/blocos/bloco-05-inteligencia-analytics/plano-especial-analytics.md`

Impacto:

- a cobertura de bloco 05 ainda não está totalmente decidida;
- a próxima etapa deve definir se esse tema vira página própria, conteúdo de upgrade/plano ou trecho incorporado em outra página.

## Decisões recomendadas para a próxima etapa

1. Fechar um mapa fonte-destino definitivo antes de qualquer reescrita em lote.
2. Corrigir a arquitetura das seções 03 e 04 antes de refinar o texto dessas páginas.
3. Corrigir os slugs inconsistentes antes da revisão editorial final.
4. Tratar `pagina-nao-encontrada` como lacuna obrigatória, não opcional, porque o link já está exposto.
5. Preservar as páginas estratégicas extras do bloco 05 e usá-las como referência de tom editorial premium.

## Resultado da etapa 1

Status: `concluída`

Saída desta etapa:

- mapa de equivalência entre manual e docs publicado;
- lista de lacunas reais;
- lista de páginas extras já publicadas;
- lista de inconsistências estruturais que precisam ser resolvidas antes da migração editorial completa.
