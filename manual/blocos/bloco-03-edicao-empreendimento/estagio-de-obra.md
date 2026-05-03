# Estagio de obra

URL principal: `https://admin.standdigital.com.br/standDigital/obra-estagio/<id-do-empreendimento>`

Link contextual relacionado:

- Estagio de obra: `https://admin.standdigital.com.br/standDigital/obra-estagio/<id-do-empreendimento>`

## Objetivo da tela

Montar o cronograma da obra e atualizar o percentual de progresso de cada etapa.

## O que existe na tela

- titulo `Estagio de obra`;
- descricao sobre cronograma e percentuais;
- botao `Definir estagios`;
- botao `Salvar`;
- aviso quando houver estagios invalidos;
- indicador de `Progresso geral da obra`;
- barra de progresso ponderado;
- cards de estagios com nome, peso e percentual;
- botao `Remover cronograma`;
- estado vazio com sugestoes de estrutura;
- dialogo maximizado para definicao dos estagios;
- recursos para:
  - adicionar etapa;
  - remover etapa;
  - reordenar por arraste;
  - aplicar sugestoes prontas.

## Como usar

1. Crie ou revise a estrutura dos estagios.
2. Defina o peso de cada etapa.
3. Informe os percentuais realizados.
4. Salve para enviar o cronograma e os progressos ao servidor.

## Como fazer

### Criar o cronograma inicial da obra

1. Acesse `https://admin.standdigital.com.br/standDigital/obra-estagio/<id-do-empreendimento>`.
2. Clique em `Definir estagios`.
3. Escolha uma sugestao pronta ou adicione os estagios manualmente.
4. Ajuste nomes, pesos e ordem.
5. Feche o dialogo.
6. Informe os percentuais de cada etapa.
7. Clique em `Salvar`.

### Atualizar o percentual da obra

1. Na lista de estagios, altere o campo `%` de cada etapa.
2. Observe a atualizacao do progresso geral.
3. Clique em `Salvar`.

### Reorganizar as etapas

1. Clique em `Definir estagios`.
2. Arraste as etapas para a nova ordem.
3. Ajuste os pesos, se necessario.
4. Salve o cronograma.

### Remover todo o cronograma

1. Na tela principal, clique em `Remover cronograma`.
2. Confirme a exclusao do conjunto de estagios.

## Perguntas e respostas

### O progresso geral e uma media simples?

Nao. A tela calcula o total com base nos pesos e percentuais de cada etapa.

### Posso usar um modelo pronto de estagios?

Sim. A tela oferece sugestoes de estrutura para comecar mais rapido.

### O que impede o salvamento?

Etapas sem nome ou com peso menor ou igual a zero bloqueiam a gravacao.

### Quando os dados sao enviados ao servidor?

No fluxo dessa tela, nada e enviado ate clicar em `Salvar`.
