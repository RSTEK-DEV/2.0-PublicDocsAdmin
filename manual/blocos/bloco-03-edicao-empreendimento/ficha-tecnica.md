# Ficha tecnica

URL base: `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>`

Links contextuais relacionados:

- Visao geral: `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=geral&focus=dados-gerais`
- Dados gerais: `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=geral&focus=dados-gerais`
- Ativacao: `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=geral&focus=ativacao-empreendimento`
- Localizacao: `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=localizacao&focus=localizacao-endereco`
- Visual: `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=visual&focus=visual-imagens`
- Cores: `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=visual&focus=cores-projeto`
- Facilidades: `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=facilidades&focus=beneficios-empreendimento`

## Objetivo da tela

Editar as informacoes principais do empreendimento e preparar o stand para ativacao.

## O que existe na tela

- barra superior com nome do empreendimento, status `Ativo` ou `Inativo` e botao `Salvar`;
- aviso de pendencias para ativacao, quando existir;
- abas `Geral`, `Localizacao`, `Aspectos Visuais` e `Facilidades`;
- na aba `Geral`:
  - `ID publico (slug)`;
  - `Nome do empreendimento`;
  - marcadores `Lancamento` e `Destaque`;
  - editor de `Descricao`;
  - bloco `Ativacao do Empreendimento`;
- na aba `Localizacao`:
  - pais, estado e cidade;
  - bloco de endereco;
  - coordenadas, quando disponiveis;
- na aba `Aspectos Visuais`:
  - upload de imagem de capa;
  - upload de logomarca;
  - bloco de paleta de cores;
- na aba `Facilidades`:
  - categorias de amenidades;
  - selecao por chips;
  - resumo de itens escolhidos.

## Como usar

1. Abra a aba correspondente ao tipo de dado que deseja alterar.
2. Edite os campos do empreendimento.
3. Use o botao `Salvar` na barra superior para gravar as alteracoes.
4. Revise a area de ativacao para entender o que ainda falta antes de liberar o projeto.

## Como fazer

### Alterar o nome e a descricao do empreendimento

1. Acesse `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=geral&focus=dados-gerais`.
2. Atualize `Nome do empreendimento`.
3. Edite a `Descricao`.
4. Clique em `Salvar` na barra superior.

### Alterar o endereco do empreendimento

1. Abra `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=localizacao&focus=localizacao-endereco`.
2. Ajuste pais, estado e cidade, se necessario.
3. Clique em `Definir endereco` ou `Editar endereco`.
4. Confirme os dados da localizacao.
5. Salve pela barra superior.

### Trocar capa, logomarca e cores

1. Abra `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=visual&focus=visual-imagens`.
2. Envie a nova imagem de capa.
3. Envie a nova logomarca.
4. Para personalizar a identidade visual, acesse `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=visual&focus=cores-projeto`.
5. Ative `Cores personalizadas` e ajuste a paleta.
6. Salve pela barra superior.

### Ativar o empreendimento

1. Abra `https://admin.standdigital.com.br/standDigital/edit/<id-do-empreendimento>?tab=geral&focus=ativacao-empreendimento`.
2. Verifique a lista de pendencias.
3. Complete os dados obrigatorios, imagens e localizacao.
4. Quando o painel indicar que o projeto esta pronto, altere o status de ativacao.
5. Salve as alteracoes.

## Perguntas e respostas

### Onde eu salvo as alteracoes da ficha tecnica?

No botao `Salvar` da barra superior do layout do empreendimento.

### Posso ativar o empreendimento com pendencias?

Nao. A tela bloqueia a ativacao quando ainda faltam requisitos minimos.

### O slug e o mesmo nome exibido ao cliente?

Nao. O slug e o identificador usado na URL publica.

### As facilidades sao obrigatorias?

Nao. Esse bloco e opcional, mas pode enriquecer a apresentacao do empreendimento.
