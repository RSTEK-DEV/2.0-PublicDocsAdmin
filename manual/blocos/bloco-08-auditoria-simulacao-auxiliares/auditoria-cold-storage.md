# Auditoria cold storage

URL principal: `https://admin.standdigital.com.br/config/auditoria/cold-storage`

## Objetivo da tela

Consultar o historico frio de auditoria para periodos prolongados, compliance e validacao de integridade.

## O que existe na tela

- cabecalho com descricao da camada historica;
- cards sobre armazenamento frio, retencao e rastreabilidade;
- tabela `Consulta historica`;
- filtros equivalentes aos logs ativos;
- area `Integridade do arquivo frio`;
- campo de data do lote no formato diario;
- botoes `Verificar integridade` e `Abrir certificado`;
- resumo com hash, blockchain, quantidade de linhas e transacao;
- dialogo de verificacao por dia a partir de um log selecionado.

## Como usar

1. Use os filtros da tabela para localizar eventos historicos.
2. Revise a lista retornada.
3. Quando precisar validar um lote diario, informe a data e execute a verificacao de integridade.

## Como fazer

### Pesquisar historico de auditoria

1. Acesse `https://admin.standdigital.com.br/config/auditoria/cold-storage`.
2. Preencha os filtros desejados.
3. Clique em `Filtrar`.

### Verificar a integridade de um lote diario

1. Informe a data no campo `Data do lote`.
2. Clique em `Verificar integridade`.
3. Revise se o hash local confere e como esta o status blockchain.

### Abrir o certificado do lote

1. Execute a verificacao da data desejada.
2. Clique em `Abrir certificado`.
3. Consulte o HTML retornado pelo backend.

### Verificar o dia de um log encontrado

1. Localize o evento na tabela.
2. Use a acao da linha associada a verificacao do dia, quando disponivel.
3. Revise o dialogo de integridade daquele lote diario.

## Perguntas e respostas

### Qual a diferenca entre logs ativos e cold storage?

`Logs ativos` focam na operacao recente. `Cold storage` cobre historico prolongado e verificacao de integridade.

### O que significa hash divergente?

Significa que o hash calculado nao confere com o hash armazenado para aquele lote diario.

### Posso validar o certificado por uma data especifica?

Sim. A tela possui um campo proprio para informar a data do lote.
