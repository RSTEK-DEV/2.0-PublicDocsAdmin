# Novo empreendimento

URL principal: `https://admin.standdigital.com.br/standDigital/new`

Links contextuais relacionados:

- Novo empreendimento: `https://admin.standdigital.com.br/standDigital/new`
- Empreendimentos: `https://admin.standdigital.com.br/standDigital`

## Objetivo da tela

Cadastrar um novo empreendimento na plataforma com os dados iniciais minimos para inicio da configuracao.

## O que existe na tela

- cabecalho `Novo Projeto`;
- subtitulo orientando a criacao de um novo projeto;
- secao `Identificacao`;
- campo `ID do Projeto`;
- campo `Nome do Projeto`;
- secao `Localizacao`;
- campo `Pais`;
- campo `Estado / regiao`;
- campo `Cidade`;
- botao `Cancelar`;
- botao `Criar Projeto`;
- dialogo posterior para definir `Plano` e `Status do Stand`;
- para usuarios sem perfil master, banner comercial com botao `Fale Conosco` no lugar do formulario.

## Como usar

1. Informe o identificador do projeto.
2. Preencha o nome do empreendimento.
3. Defina pais, estado e cidade.
4. Clique em `Criar Projeto`.
5. Depois da criacao, informe o plano e o status operacional do stand.
6. Ao concluir, o sistema retorna para a lista de empreendimentos.

## Como fazer

### Criar um novo empreendimento

1. Acesse `https://admin.standdigital.com.br/standDigital/new`.
2. Informe o `ID do Projeto` usando apenas letras, numeros, `_` ou `-`.
3. Preencha `Nome do Projeto`.
4. Informe `Pais`, `Estado / regiao` e `Cidade`.
5. Clique em `Criar Projeto`.
6. No dialogo seguinte, escolha o plano `Trial` ou `Comercial`.
7. Defina o status `Active`, `Suspended` ou `Archived`.
8. Clique em `Definir plano e status`.

### Voltar sem criar o projeto

1. Na tela de novo empreendimento, clique em `Cancelar`.
2. O painel retorna para `https://admin.standdigital.com.br/standDigital`.

### Solicitar criacao quando eu nao tenho permissao

1. Acesse a mesma rota.
2. Se o formulario nao aparecer, clique em `Fale Conosco`.
3. O sistema abre o canal comercial para solicitar a expansao ou contratacao.

## Perguntas e respostas

### O ID do Projeto e o nome exibido ao cliente?

Nao. O ID e um identificador tecnico usado na URL. O nome do projeto e o titulo exibido.

### Posso usar espacos ou caracteres especiais no ID?

Nao. O campo aceita apenas letras, numeros, underline e hifen.

### O que acontece se o ID ja existir?

O sistema bloqueia a criacao e informa que esse identificador ja esta em uso.

### O projeto fica ativo automaticamente?

Nao necessariamente. Depois da criacao, o fluxo ainda pede a definicao de plano e status.
