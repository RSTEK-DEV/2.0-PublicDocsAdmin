# Selecao de empresa

URL principal: `https://admin.standdigital.com.br/selecionar-empresa`

## Objetivo da tela

Definir qual empresa ficara ativa no ambiente atual do usuario.

## O que existe na tela

- logomarca do sistema;
- titulo `Selecione uma Empresa`, quando houver mais de uma opcao;
- botao de recarregar a lista;
- lista de empresas disponiveis para o usuario;
- identificacao visual do perfil de acesso em cada empresa, como `ADMIN`, `MKT` ou `Comercial`;
- estados de carregamento e selecao automatica;
- aviso quando nao houver empresa disponivel;
- botao `Voltar para Login` em caso de acesso sem empresa.

## Como usar

1. Aguarde o carregamento das empresas vinculadas ao seu usuario.
2. Se houver apenas uma empresa, o sistema pode selecionar automaticamente.
3. Se houver varias, clique sobre a empresa desejada.
4. O painel carrega o ambiente, os dados da empresa e suas preferencias antes de abrir a pagina inicial.

## Como fazer

### Entrar na empresa correta

1. Acesse `https://admin.standdigital.com.br/selecionar-empresa` apos o login.
2. Confira o nome da empresa na lista.
3. Verifique a funcao mostrada no selo de acesso.
4. Clique na empresa para continuar.

### Recarregar a lista de empresas

1. Clique no icone de atualizar no topo da tela.
2. Aguarde a nova busca.
3. Se a empresa ainda nao aparecer, valide se o acesso foi concedido para o seu usuario.

## Perguntas e respostas

### Por que essa tela aparece depois do login?

Porque o mesmo usuario pode ter acesso a mais de uma empresa e o painel precisa saber qual contexto carregar.

### O que acontece quando existe apenas uma empresa?

O sistema tenta selecionar automaticamente essa empresa para acelerar a entrada.

### O que significa o selo de funcao ao lado da empresa?

Ele mostra o perfil de acesso do usuario naquela empresa, por exemplo administrador, marketing ou comercial.

### O que fazer se nenhuma empresa estiver disponivel?

Use `Voltar para Login` e solicite ao administrador a liberacao de acesso a pelo menos uma empresa.
