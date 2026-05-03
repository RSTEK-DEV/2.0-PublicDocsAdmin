# Configuracao de integracao CVCRM

URL principal: `https://admin.standdigital.com.br/config/integracoes/config/cvcrm`

## Objetivo da tela

Configurar a integracao `CVCRM`, que nesta etapa do projeto esta tratada como integracao em implantacao.

## O que existe na tela

- botao para voltar a `Integracoes`;
- abas de `Credenciais`, `Eventos`, `Empreendimentos`, `Sincronizacao` e `Logs`;
- acoes para criar, salvar ou excluir a integracao;
- guia interno de configuracao com fluxo resumido;
- bloco de `URL do Webhook` apos a criacao da integracao;
- area de sincronizacao inicial;
- tabela de logs de webhook.

## Como usar

1. Acesse a configuracao pelo card `CVCRM`.
2. Preencha os dados obrigatorios.
3. Salve a integracao.
4. Use as abas para completar o fluxo de implantacao.

## Como fazer

### Configurar o CVCRM pela primeira vez

1. Acesse `https://admin.standdigital.com.br/config/integracoes/config/cvcrm`.
2. Preencha nome de exibicao, dominio CVCRM, e-mail e token.
3. Defina o `Inbound Secret`, se quiser validar os webhooks.
4. Escolha os eventos que o sistema deve processar.
5. Mapeie cada stand local ao ID do empreendimento no CVCRM.
6. Clique em `Criar integracao`.

### Copiar a URL do webhook

1. Salve ou crie a integracao.
2. Localize o bloco `URL do Webhook`.
3. Copie a URL exibida.
4. Cadastre essa URL no painel do CVCRM com o mesmo `Inbound Secret`.

### Executar a sincronizacao inicial

1. Abra a aba `Sincronizacao`.
2. Escolha um stand previamente mapeado.
3. Clique em `Iniciar sincronizacao`.
4. Revise o resultado por tipologias, planos, unidades e corretores.

### Consultar logs de webhook

1. Abra a aba `Logs`.
2. Clique em `Atualizar`, se necessario.
3. Revise evento, status, mensagem de erro e horario de recebimento.

### Excluir a integracao

1. Clique em `Excluir integracao`.
2. Confirme a operacao.
3. Considere que os webhooks param de funcionar imediatamente.

## Perguntas e respostas

### Posso sincronizar antes de salvar a integracao?

Nao. Recursos como sincronizacao e logs dependem da integracao criada.

### O mapeamento de stands e obrigatorio?

Sim. No fluxo atual do CVCRM, o vinculo do stand local com o ID do empreendimento e necessario para sincronizacao e processamento correto dos webhooks.

### O CVCRM ja esta considerado concluido?

Nao. No manual, esta integracao esta posicionada como fluxo em implantacao.
