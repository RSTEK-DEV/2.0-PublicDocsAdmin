# Simulador

URL principal: `https://admin.standdigital.com.br/simulate`

## Objetivo da tela

Abrir uma sessao de simulacao do stand em iframe, respeitando o token liberado pela aplicacao e o layout escolhido.

## O que existe na tela

- area central de simulacao com iframe do stand;
- moldura visual variando conforme o layout;
- modos de exibicao para desktop, tablet e celular;
- tela de encerramento da simulacao;
- mensagens de carregamento e fallback;
- fechamento automatico da janela quando o acesso e invalido.

## Como usar

1. Abra a simulacao a partir do fluxo que concede o token.
2. Aguarde a carga do stand dentro do iframe.
3. Observe a exibicao no layout ativo.
4. Feche a janela ao terminar ou apos o encerramento da simulacao.

## Como fazer

### Simular o stand em outra moldura

1. Inicie a simulacao pelo fluxo do painel.
2. Aguarde a aplicacao ajustar o layout para desktop, tablet ou celular.
3. Revise a experiencia no iframe.

### Entender uma simulacao encerrada

1. Quando a tela exibir `Simulacao encerrada`, considere o fluxo finalizado.
2. Clique em `Fechar janela` se quiser encerrar manualmente.

## Perguntas e respostas

### Posso abrir essa tela diretamente pela URL?

Nao e o fluxo esperado. A tela depende de um token de simulacao fornecido pela aplicacao.

### O que acontece se o token nao chegar?

A pagina entra em fallback e pode fechar a janela automaticamente por acesso invalido.

### A simulacao abre o stand real?

Ela abre o stand configurado para a empresa, usando a URL do ambiente de stand com parametro de simulacao.
