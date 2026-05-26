# Parcerias

URLs principais:

- `https://admin.standdigital.com.br/standDigital/parcerias`
- `https://admin.standdigital.com.br/standDigital/parcerias/minhas`

## Objetivo da tela

Permitir que uma empresa compartilhe stands com outras empresas e acompanhe os convites recebidos ou concedidos.

## O que existe na tela

- cabecalho de parcerias;
- duas abas principais;
- aba `Meus stands`;
- aba `Minhas`;
- contador de pendencias na aba de convites recebidos;
- seletor de stand na visao da empresa dona;
- lista de parcerias por stand;
- botao `Convidar`;
- busca da empresa parceira por suburl;
- confirmacoes para cancelar, revogar, aceitar, recusar ou sair;
- historico de parcerias encerradas na visao de empresa parceira.

## Como a tela se organiza

- `Meus stands`: usada pela empresa proprietaria do stand para convidar e administrar parceiros.
- `Minhas`: usada pela empresa convidada para aceitar, recusar ou sair de parcerias.

## O que os termos significam

- `Suburl`: identificador publico da empresa usado para localizar a parceira no convite.
- `Pendente`: convite enviado e ainda sem resposta.
- `Ativa`: parceria aceita e operando normalmente.
- `Revogada`: parceria encerrada depois de ativa.
- `Recusada`: convite rejeitado pela empresa convidada.

## Como usar

1. Abra a tela de parcerias.
2. Escolha a aba de acordo com seu papel no fluxo.
3. Se voce for a empresa dona, selecione o stand e envie convites.
4. Se voce for a empresa parceira, revise pendencias e responda aos convites.

## Como fazer

### Convidar outra empresa para operar um stand

1. Acesse `https://admin.standdigital.com.br/standDigital/parcerias`.
2. Fique na aba `Meus stands`.
3. Selecione o stand desejado.
4. Clique em `Convidar`.
5. Informe a `suburl` da empresa parceira.
6. Confirme o envio do convite.

### Cancelar um convite pendente

1. Na aba `Meus stands`, selecione o stand.
2. Localize a parceria com status pendente.
3. Use a acao de cancelamento.
4. Confirme a operacao.

### Revogar uma parceria ativa

1. Na mesma lista, localize uma parceria ativa.
2. Use a acao de revogar.
3. Confirme a remocao do acesso.

### Aceitar um convite recebido

1. Acesse `https://admin.standdigital.com.br/standDigital/parcerias/minhas` ou abra a aba `Minhas`.
2. Revise a secao de pendentes.
3. Abra a acao `Aceitar`.
4. Confirme o ingresso na parceria.

### Recusar um convite recebido

1. Na aba `Minhas`, localize o convite pendente.
2. Use a acao `Recusar`.
3. Confirme a resposta.

### Sair de uma parceria ativa

1. Na aba `Minhas`, localize a parceria ativa.
2. Use a acao `Sair`.
3. Confirme a saida.

## Regras e validacoes

- a empresa dona precisa escolher um stand antes de enviar convites;
- o convite localiza a empresa parceira pela `suburl`;
- a busca pode falhar se a suburl nao existir ou se apontar para a propria empresa;
- pendencias aparecem primeiro para facilitar a tratativa;
- parcerias recusadas ou revogadas ficam no historico da empresa parceira.

## Perguntas e respostas

### Posso convidar mais de uma empresa para o mesmo stand?

Sim. A tela foi desenhada para listar varias parcerias por stand.

### O que acontece se eu aceitar uma parceria?

Sua empresa passa a operar aquele stand conforme as permissoes do fluxo de parceria.

### Onde vejo os convites que recebi?

Na aba `Minhas`, com destaque para a secao de pendentes.

### Posso desfazer uma parceria ativa?

Sim. A empresa dona pode revogar, e a empresa parceira pode sair da parceria.
