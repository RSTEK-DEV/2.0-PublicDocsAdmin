# Auditoria logs ativos

URL principal: `https://admin.standdigital.com.br/config/auditoria/logs-ativos`

## Objetivo da tela

Consultar os eventos recentes de auditoria para operacao, suporte e investigacao imediata.

## O que existe na tela

- cabecalho com descricao da trilha operacional de 30 dias;
- cards informativos sobre janela consultavel, origem dos dados e uso dominante;
- tabela `Eventos recentes`;
- filtros por acao, ator, tipo de recurso, origem, ID do recurso e periodo;
- botoes `Limpar` e `Filtrar`;
- paginacao e seletor de quantidade por pagina;
- acao `Ver mais` por linha;
- dialogo com detalhes do evento e payload bruto.

## Como usar

1. Ajuste os filtros conforme o incidente ou operacao que deseja investigar.
2. Clique em `Filtrar`.
3. Revise os eventos retornados na tabela.
4. Abra `Ver mais` para consultar o detalhe completo do registro.

## Como fazer

### Localizar logs por usuario

1. Acesse `https://admin.standdigital.com.br/config/auditoria/logs-ativos`.
2. Preencha o campo `Ator` com parte do email.
3. Clique em `Filtrar`.

### Investigar eventos por recurso

1. Escolha o `Tipo de recurso`.
2. Se souber o identificador, preencha `ID do recurso`.
3. Filtre a consulta.

### Ver o payload completo do evento

1. Localize a linha desejada.
2. Clique em `Ver mais`.
3. Consulte o painel de detalhes e o payload bruto em JSON.

## Perguntas e respostas

### Qual periodo esta disponivel aqui?

A tela foi preparada para consulta operacional da janela ativa de 30 dias.

### Posso filtrar por origem da chamada?

Sim. Existe filtro por origem, como `Private Admin`, `Private Stand` e `Internal`.

### Onde vejo o detalhe tecnico do evento?

No dialogo aberto pela acao `Ver mais`.
