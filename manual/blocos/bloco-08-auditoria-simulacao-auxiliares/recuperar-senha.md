# Recuperar senha

URL principal: `https://admin.standdigital.com.br/recuperar`

## Objetivo da tela

Permitir que o usuario solicite o envio do e-mail de redefinicao de senha.

## O que existe na tela

- logomarca da plataforma;
- titulo `Recuperar Senha`;
- instrucoes para informar o email;
- campo `Email`;
- botao `Recuperar Senha`;
- aviso de espera quando o cooldown estiver ativo;
- botao `Voltar para Login`.

## Como usar

1. Informe o email cadastrado.
2. Clique em `Recuperar Senha`.
3. Verifique sua caixa de entrada.

## Como fazer

### Solicitar o e-mail de redefinicao

1. Acesse `https://admin.standdigital.com.br/recuperar`.
2. Digite o email.
3. Clique em `Recuperar Senha`.
4. Acesse o email recebido e siga as instrucoes.

### Voltar para a tela de login

1. Clique em `Voltar para Login`.
2. Acesse `https://admin.standdigital.com.br/login`.

## Perguntas e respostas

### Existe intervalo entre uma solicitacao e outra?

Sim. A tela aplica um cooldown de 60 segundos antes de permitir novo envio.

### O botao pode ficar desabilitado?

Sim. Isso acontece se o email for invalido ou se o cooldown ainda estiver ativo.

### Depois do envio eu continuo nesta tela?

Nao necessariamente. No fluxo atual, apos sucesso o usuario e redirecionado para o login.
