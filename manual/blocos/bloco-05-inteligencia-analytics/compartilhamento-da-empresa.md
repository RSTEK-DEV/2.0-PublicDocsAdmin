# Compartilhamento da empresa

Fluxo contextual: `Campanhas > Criar compartilhamento`

## Objetivo do fluxo

Gerar um link rastreado em nome da empresa, sem associar o compartilhamento a um corretor humano especifico.

## O que existe no wizard

- etapa `Campanha`;
- etapa `Empreendimento`;
- etapa `Experiencia`;
- etapa `Video`;
- etapa `Revisao`;
- barra de progresso;
- resumo lateral das selecoes;
- geracao de link curto;
- copia do link;
- geracao de QR Code.

## O que pode ser configurado

- campanha vigente ou `Sem campanha`;
- um empreendimento ou varios empreendimentos;
- modo `Navegacao livre` ou `Apresentacao guiada`;
- telas visiveis no modo livre;
- sequencia de telas no modo guiado;
- canal de distribuicao;
- expiracao do link;
- limite maximo de acessos;
- video de abertura opcional.

## O que os termos significam

- `Navegacao livre`: o visitante pode circular pelas telas liberadas no proprio ritmo.
- `Apresentacao guiada`: o visitante percorre um fluxo linear com etapas definidas.
- `Menus permitidos`: rotas liberadas para o link no modo livre.
- `Sequencia`: ordem das telas no fluxo guiado.
- `Canal`: classificacao operacional do meio de distribuicao do link.
- `Expiracao`: data limite calculada a partir da quantidade de dias escolhida.
- `Max. acessos`: teto de aberturas permitidas para o link.

## Como usar

1. Abra `Campanhas`.
2. Clique em `Criar compartilhamento`.
3. Avance pelas etapas do wizard.
4. Revise as configuracoes.
5. Gere o link.
6. Copie a URL final ou abra o QR Code.

## Como fazer

### Criar um link institucional simples

1. Em `Campanha`, escolha uma campanha ou mantenha `Sem campanha`.
2. Em `Empreendimento`, selecione o stand desejado.
3. Em `Experiencia`, escolha `Navegacao livre`.
4. Mantenha o canal e a expiracao adequados ao uso.
5. Pule o video, se nao precisar.
6. Revise e clique em `Gerar link`.

### Criar um link para varios empreendimentos

1. Na etapa `Empreendimento`, altere para `Multiplos`.
2. Selecione pelo menos 2 empreendimentos.
3. Continue o fluxo normalmente.

### Criar um fluxo guiado

1. Na etapa `Experiencia`, escolha `Apresentacao guiada`.
2. Toque nas telas na ordem desejada.
3. Confira a numeracao aplicada em cada item.
4. Continue apenas quando a sequencia estiver completa.

### Restringir as telas no modo livre

1. Escolha `Navegacao livre`.
2. Abra `Telas visiveis`.
3. Marque apenas as rotas que devem ficar acessiveis.
4. Continue o fluxo.

### Configurar expiracao e limite de acessos

1. Abra `Opcoes avancadas`.
2. Escolha a expiracao entre 3 dias e 1 ano.
3. Preencha `Max. acessos` quando precisar limitar o alcance do link.
4. Considere que o minimo aceito para esse limite e 3.

### Gerar e compartilhar o QR Code

1. Depois da criacao do link, clique em `QR Code`.
2. Use a imagem exibida para materiais fisicos ou digitais.
3. Se precisar, copie tambem o link curto exibido no resultado.

## Video de abertura

- o video e opcional;
- sem video, o visitante entra direto no stand;
- o arquivo pode ser enviado por selecao ou arraste;
- o limite operacional documentado na interface e 200 MB;
- a interface recomenda videos de ate 30 segundos;
- o envio passa pelos estados `Preparando`, `Enviando`, `Processando`, `Pronto` e `Erro`;
- o wizard nao permite concluir enquanto o video ainda estiver em envio ou processamento;
- se houver falha, o usuario precisa reenviar ou desligar a opcao de video.

## Regras e validacoes

- no modo `unico`, e obrigatorio selecionar um empreendimento;
- no modo `multiplos`, e obrigatorio selecionar ao menos 2 empreendimentos;
- no modo guiado, e obrigatorio definir a sequencia de telas;
- quando houver `Max. acessos`, o valor minimo aceito e 3;
- se o video estiver com erro, o fluxo nao pode ser concluido ate corrigir;
- o link final usa um identificador curto proprio para distribuicao.

## Perguntas e respostas

### Esse link fica associado a qual corretor?

Ao tipo institucional da empresa, nao a um corretor humano individual.

### Posso criar um link sem campanha?

Sim. O wizard oferece a opcao `Sem campanha`.

### Posso usar varios empreendimentos no mesmo link?

Sim. O fluxo suporta compartilhamento multiplo.

### O que acontece se eu nao usar video?

O visitante entra diretamente na experiencia do stand.

### Posso limitar a vida util do link?

Sim. O wizard permite definir expiracao e, opcionalmente, limitar o numero maximo de acessos.
