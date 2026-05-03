# Planejamento Inicial do Manual do Cliente

Este documento e a referencia principal do trabalho de documentacao do painel administrativo.

## Objetivo

Produzir um guia de usuario detalhado, em Markdown, organizado por telas e por blocos de execucao, para uso do cliente final.

## O que sera feito

O trabalho sera executado pagina por pagina, sempre com o mesmo padrao:

1. identificar a rota e a funcao da tela;
2. ler a implementacao da pagina e dos componentes principais;
3. cruzar a tela com a ajuda contextual existente;
4. descrever a tela como manual de uso;
5. criar um `Como fazer`;
6. criar uma secao de `Perguntas e respostas`;
7. registrar o status da pagina no plano de execucao.

## Como sera feito

## Metodo de analise

- leitura das rotas oficiais em `src/router/routes.js`;
- leitura das paginas em `src/pages/**`;
- leitura dos componentes principais usados por cada pagina;
- leitura do catalogo de ajuda contextual em `src/data/contextualHelpCatalog/**`;
- uso da convencao de links profundos descrita em `docs/help-context-convention.md`;
- consolidacao do resultado em `docs/manual/`.

## Fontes de referencia do plano

- rotas do painel:
  - `src/router/routes.js`
- ajuda contextual:
  - `src/data/contextualHelpCatalog/index.js`
  - `src/data/contextualHelpCatalog/navigation/*.js`
  - `src/data/contextualHelpCatalog/help/*.js`
- convencao de foco e ajuda:
  - `docs/help-context-convention.md`
- paginas ja analisadas no primeiro bloco:
  - `src/pages/LoginPage.vue`
  - `src/pages/EmpresaSelectPage.vue`
  - `src/pages/IndexPage.vue`
  - `src/pages/SupportPage.vue`
  - `src/pages/MyProfilePage.vue`
  - `src/pages/MyPreferencesPage.vue`

## Estrutura de entrega

- `docs/manual/README.md`: indice resumido do manual;
- `docs/manual/00-planejamento-inicial.md`: documento mestre deste planejamento;
- `docs/manual/plano-execucao.md`: acompanhamento dos blocos e paginas executadas;
- `docs/manual/blocos/`: cada bloco possui sua propria pasta;
- `docs/manual/blocos/bloco-xx/README.md`: resumo e status do bloco;
- `docs/manual/blocos/bloco-xx/*.md`: telas detalhadas do bloco.

## Regras do conteudo

- os links informados no manual devem iniciar com `https://admin.standdigital.com.br`;
- quando houver ajuda contextual, usar a URL final com `tab` e `focus`;
- a linguagem deve ser orientada ao uso pelo cliente;
- cada tela precisa explicar o que existe, para que serve e como operar;
- cada tela precisa ter `Como fazer` e `Perguntas e respostas`.

## Inventario inicial de paginas do painel

| Bloco | Pagina | Rota base | Origem principal | Status |
|---|---|---|---|---|
| 01 | Login | `/login` | `src/pages/LoginPage.vue` | Concluida |
| 01 | Selecao de empresa | `/selecionar-empresa` | `src/pages/EmpresaSelectPage.vue` | Concluida |
| 01 | Pagina inicial | `/` | `src/pages/IndexPage.vue` | Concluida |
| 01 | Suporte | `/suporte` | `src/pages/SupportPage.vue` | Concluida |
| 01 | Meu perfil | `/config/meu-perfil` | `src/pages/MyProfilePage.vue` | Concluida |
| 01 | Minhas preferencias | `/config/minhas-preferencias` | `src/pages/MyPreferencesPage.vue` | Concluida |
| 02 | Empreendimentos | `/standDigital` | `src/pages/stand/StandDigitalPage.vue` | Concluida |
| 02 | Novo empreendimento | `/standDigital/new` | `src/pages/stand/NewProjectPage.vue` | Concluida |
| 02 | Contratar projeto | `/standDigital/contrate` | `src/pages/stand/HireProjectPage.vue` | Concluida |
| 03 | Ficha tecnica | `/standDigital/edit/:id` | `src/pages/stand/EditProjectPage.vue` | Concluida |
| 03 | Gerenciador de telas | `/standDigital/screens/:id` | `src/pages/stand/ScreenManagerPage.vue` | Concluida |
| 03 | Configuracao do empreendimento | `/standDigital/config/:id` | `src/pages/stand/StandConfigPage.vue` | Concluida |
| 03 | Unidades | `/standDigital/units/:id` | `src/pages/stand/StandUnidadesPage.vue` | Concluida |
| 03 | Estagio de obra | `/standDigital/obra-estagio/:id` | `src/pages/stand/StandObraEstagioPage.vue` | Concluida |
| 04 | Midias do empreendimento | `/standDigital/midias/:id` | `src/pages/stand/StandMidiasPage.vue` | Concluida |
| 04 | Compartilhaveis | `/standDigital/midiasSociais/:id` | `src/pages/stand/StandMidiasSociaisPage.vue` | Concluida |
| 04 | Playbooks | `/standDigital/playbooks/:id` | `src/pages/stand/StandPlaybooksPage.vue` | Concluida |
| 04 | Manual de vendas | `/tools/manual` | `src/pages/tools/ManualVendasPage.vue` | Concluida |
| 04 | Redator | `/tools/redator` | `src/pages/tools/RedatorPage.vue` | Concluida |
| 05 | Inteligencia geral | `/inteligencia` | `src/pages/inteligencia/broker/BrokerOverviewPage.vue` | Concluida |
| 05 | Inteligencia de corretores | `/corretores` | `src/pages/inteligencia/broker/CorretoresPage.vue` | Concluida |
| 05 | Analytics overview | `/analytics` | `src/pages/inteligencia/analytics/StatisticsOverviewPage.vue` | Concluida |
| 05 | Analytics retention | `/analytics/retention` | `src/pages/inteligencia/analytics/StatisticsRetentionPage.vue` | Concluida |
| 05 | Analytics pages | `/analytics/pages` | `src/pages/inteligencia/analytics/StatisticsPagesPage.vue` | Concluida |
| 05 | Analytics demographic | `/analytics/demographic` | `src/pages/inteligencia/analytics/StatisticsDemographicPage.vue` | Concluida |
| 05 | Analytics devices | `/analytics/devices` | `src/pages/inteligencia/analytics/StatisticsDevicesPage.vue` | Concluida |
| 06 | Corretores | `/brokers/users` | `src/pages/brokers/UsersPage.vue` | Concluida |
| 06 | Equipe interna | `/config/users` | `src/pages/config/UsersPage.vue` | Concluida |
| 06 | Usuarios da equipe | `/config/users/equipe` | `src/pages/config/UsersEquipePage.vue` | Concluida |
| 07 | Ajustes | `/config/ajustes` | `src/pages/config/AjustesPage.vue` | Concluida |
| 07 | Integracoes | `/config/integracoes` | `src/pages/config/IntegrationsPage.vue` | Concluida |
| 07 | Configuracao de integracao | `/config/integracoes/config/:type` | `src/pages/config/IntegrationConfigPage.vue` | Concluida |
| 08 | Auditoria ativa | `/config/auditoria/logs-ativos` | `src/pages/config/AuditActiveLogsPage.vue` | Concluida |
| 08 | Auditoria cold storage | `/config/auditoria/cold-storage` | `src/pages/config/AuditColdStoragePage.vue` | Concluida |
| 08 | Simulador | `/simulate` | `src/pages/SimulatorPage.vue` | Concluida |
| 08 | Recuperar senha | `/recuperar` | `src/pages/ForgetPasswordPage.vue` | Concluida |
| 08 | Acesso negado | `/access-denied` | `src/pages/NoAccessPage.vue` | Concluida |
| 08 | Pagina nao encontrada | `/:catchAll(.*)*` | `src/pages/ErrorNotFound.vue` | Concluida |

## Blocos de execucao

### Bloco 01 - Acesso, contexto e conta

Escopo:
entrada no sistema, empresa ativa, perfil pessoal e preferencias do usuario.

Status:
Concluido

Paginas feitas:

- login
- selecao de empresa
- pagina inicial
- suporte
- meu perfil
- minhas preferencias

### Bloco 02 - Inicio da operacao e empreendimentos

Escopo:
entrada na area de empreendimentos e telas iniciais de operacao comercial.

Status:
Concluido

Paginas feitas:

- empreendimentos
- novo empreendimento
- contratar projeto

### Bloco 03 - Edicao do empreendimento

Escopo:
estrutura, conteudo base e configuracoes centrais do empreendimento.

Status:
Concluido

Paginas feitas:

- ficha tecnica
- gerenciador de telas
- configuracao do empreendimento
- unidades
- estagio de obra

### Bloco 04 - Conteudo, midias e publicacao comercial

Escopo:
conteudos visuais, material de compartilhamento e apoio comercial.

Status:
Concluido

Paginas feitas:

- midias do empreendimento
- compartilhaveis
- playbooks
- resumo de vendas
- redator inteligente

### Bloco 05 - Inteligencia e analytics

Escopo:
painel de inteligencia e relatorios analiticos.

Status:
Concluido

Paginas feitas:

- inteligencia geral
- inteligencia de corretores
- analytics overview
- analytics retention
- analytics pages
- analytics demographic
- analytics devices

### Bloco 06 - Corretores e equipe

Escopo:
gestao de usuarios ligados a venda e operacao interna.

Status:
Concluido

Paginas feitas:

- corretores
- equipe interna
- usuarios da equipe

### Bloco 07 - Configuracoes administrativas

Escopo:
parametrizacao da empresa e integracoes.

Status:
Concluido

Paginas feitas:

- ajustes
- integracoes
- configuracao de integracao

### Bloco 08 - Auditoria, simulacao e telas auxiliares

Escopo:
rotinas de apoio, auditoria e paginas de excecao.

Status:
Concluido

Paginas feitas:

- auditoria ativa
- auditoria cold storage
- simulador
- recuperar senha
- acesso negado
- pagina nao encontrada

## Controle do que ja foi feito

Documentos entregues ate agora:

- [README.md](./README.md)
- [plano-execucao.md](./plano-execucao.md)
- [blocos/bloco-01-acesso-conta/README.md](./blocos/bloco-01-acesso-conta/README.md)
- [blocos/bloco-01-acesso-conta/login.md](./blocos/bloco-01-acesso-conta/login.md)
- [blocos/bloco-01-acesso-conta/selecao-de-empresa.md](./blocos/bloco-01-acesso-conta/selecao-de-empresa.md)
- [blocos/bloco-01-acesso-conta/pagina-inicial.md](./blocos/bloco-01-acesso-conta/pagina-inicial.md)
- [blocos/bloco-01-acesso-conta/suporte.md](./blocos/bloco-01-acesso-conta/suporte.md)
- [blocos/bloco-01-acesso-conta/meu-perfil.md](./blocos/bloco-01-acesso-conta/meu-perfil.md)
- [blocos/bloco-01-acesso-conta/minhas-preferencias.md](./blocos/bloco-01-acesso-conta/minhas-preferencias.md)
- [blocos/bloco-02-inicio-empreendimentos/README.md](./blocos/bloco-02-inicio-empreendimentos/README.md)
- [blocos/bloco-02-inicio-empreendimentos/empreendimentos.md](./blocos/bloco-02-inicio-empreendimentos/empreendimentos.md)
- [blocos/bloco-02-inicio-empreendimentos/novo-empreendimento.md](./blocos/bloco-02-inicio-empreendimentos/novo-empreendimento.md)
- [blocos/bloco-02-inicio-empreendimentos/contratar-projeto.md](./blocos/bloco-02-inicio-empreendimentos/contratar-projeto.md)
- [blocos/bloco-03-edicao-empreendimento/README.md](./blocos/bloco-03-edicao-empreendimento/README.md)
- [blocos/bloco-03-edicao-empreendimento/ficha-tecnica.md](./blocos/bloco-03-edicao-empreendimento/ficha-tecnica.md)
- [blocos/bloco-03-edicao-empreendimento/gerenciador-de-telas.md](./blocos/bloco-03-edicao-empreendimento/gerenciador-de-telas.md)
- [blocos/bloco-03-edicao-empreendimento/configuracao-do-empreendimento.md](./blocos/bloco-03-edicao-empreendimento/configuracao-do-empreendimento.md)
- [blocos/bloco-03-edicao-empreendimento/unidades.md](./blocos/bloco-03-edicao-empreendimento/unidades.md)
- [blocos/bloco-03-edicao-empreendimento/estagio-de-obra.md](./blocos/bloco-03-edicao-empreendimento/estagio-de-obra.md)
- [blocos/bloco-04-conteudo-midias-publicacao/README.md](./blocos/bloco-04-conteudo-midias-publicacao/README.md)
- [blocos/bloco-04-conteudo-midias-publicacao/midias-do-empreendimento.md](./blocos/bloco-04-conteudo-midias-publicacao/midias-do-empreendimento.md)
- [blocos/bloco-04-conteudo-midias-publicacao/compartilhaveis.md](./blocos/bloco-04-conteudo-midias-publicacao/compartilhaveis.md)
- [blocos/bloco-04-conteudo-midias-publicacao/playbooks.md](./blocos/bloco-04-conteudo-midias-publicacao/playbooks.md)
- [blocos/bloco-04-conteudo-midias-publicacao/resumo-de-vendas.md](./blocos/bloco-04-conteudo-midias-publicacao/resumo-de-vendas.md)
- [blocos/bloco-04-conteudo-midias-publicacao/redator-inteligente.md](./blocos/bloco-04-conteudo-midias-publicacao/redator-inteligente.md)
- [blocos/bloco-05-inteligencia-analytics/README.md](./blocos/bloco-05-inteligencia-analytics/README.md)
- [blocos/bloco-05-inteligencia-analytics/metricas-e-insights.md](./blocos/bloco-05-inteligencia-analytics/metricas-e-insights.md)
- [blocos/bloco-05-inteligencia-analytics/inteligencia-de-corretores.md](./blocos/bloco-05-inteligencia-analytics/inteligencia-de-corretores.md)
- [blocos/bloco-05-inteligencia-analytics/analytics-overview.md](./blocos/bloco-05-inteligencia-analytics/analytics-overview.md)
- [blocos/bloco-05-inteligencia-analytics/analytics-retencao.md](./blocos/bloco-05-inteligencia-analytics/analytics-retencao.md)
- [blocos/bloco-05-inteligencia-analytics/analytics-paginas.md](./blocos/bloco-05-inteligencia-analytics/analytics-paginas.md)
- [blocos/bloco-05-inteligencia-analytics/analytics-demografico.md](./blocos/bloco-05-inteligencia-analytics/analytics-demografico.md)
- [blocos/bloco-05-inteligencia-analytics/analytics-dispositivos.md](./blocos/bloco-05-inteligencia-analytics/analytics-dispositivos.md)
- [blocos/bloco-06-corretores-equipe/README.md](./blocos/bloco-06-corretores-equipe/README.md)
- [blocos/bloco-06-corretores-equipe/corretores.md](./blocos/bloco-06-corretores-equipe/corretores.md)
- [blocos/bloco-06-corretores-equipe/equipe-interna.md](./blocos/bloco-06-corretores-equipe/equipe-interna.md)
- [blocos/bloco-06-corretores-equipe/usuarios-da-equipe.md](./blocos/bloco-06-corretores-equipe/usuarios-da-equipe.md)
- [blocos/bloco-07-configuracoes-administrativas/README.md](./blocos/bloco-07-configuracoes-administrativas/README.md)
- [blocos/bloco-07-configuracoes-administrativas/ajustes.md](./blocos/bloco-07-configuracoes-administrativas/ajustes.md)
- [blocos/bloco-07-configuracoes-administrativas/integracoes.md](./blocos/bloco-07-configuracoes-administrativas/integracoes.md)
- [blocos/bloco-07-configuracoes-administrativas/configuracao-de-integracao.md](./blocos/bloco-07-configuracoes-administrativas/configuracao-de-integracao.md)
- [blocos/bloco-08-auditoria-simulacao-auxiliares/README.md](./blocos/bloco-08-auditoria-simulacao-auxiliares/README.md)
- [blocos/bloco-08-auditoria-simulacao-auxiliares/auditoria-logs-ativos.md](./blocos/bloco-08-auditoria-simulacao-auxiliares/auditoria-logs-ativos.md)
- [blocos/bloco-08-auditoria-simulacao-auxiliares/auditoria-cold-storage.md](./blocos/bloco-08-auditoria-simulacao-auxiliares/auditoria-cold-storage.md)
- [blocos/bloco-08-auditoria-simulacao-auxiliares/simulador.md](./blocos/bloco-08-auditoria-simulacao-auxiliares/simulador.md)
- [blocos/bloco-08-auditoria-simulacao-auxiliares/recuperar-senha.md](./blocos/bloco-08-auditoria-simulacao-auxiliares/recuperar-senha.md)
- [blocos/bloco-08-auditoria-simulacao-auxiliares/acesso-negado.md](./blocos/bloco-08-auditoria-simulacao-auxiliares/acesso-negado.md)
- [blocos/bloco-08-auditoria-simulacao-auxiliares/pagina-nao-encontrada.md](./blocos/bloco-08-auditoria-simulacao-auxiliares/pagina-nao-encontrada.md)

## Proximo passo

Manual base concluido. Proximo passo opcional: revisao editorial final, consolidacao de padrao textual e inclusao de capturas de tela.
