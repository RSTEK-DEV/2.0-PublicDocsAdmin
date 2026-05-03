# Bloco 08 - Auditoria, simulacao e telas auxiliares

Status: concluido

## Escopo

Este bloco fecha o manual com auditoria operacional, simulacao do stand e telas de excecao ou recuperacao de acesso.

## Telas documentadas

- [Auditoria logs ativos](./auditoria-logs-ativos.md)
- [Auditoria cold storage](./auditoria-cold-storage.md)
- [Simulador](./simulador.md)
- [Recuperar senha](./recuperar-senha.md)
- [Acesso negado](./acesso-negado.md)
- [Pagina nao encontrada](./pagina-nao-encontrada.md)

## Resultado do bloco

O usuario consegue:

- consultar eventos recentes de auditoria;
- pesquisar historico frio e validar integridade por lote diario;
- abrir a simulacao do stand em layout controlado;
- solicitar recuperacao de senha;
- entender mensagens de bloqueio de acesso ou rota invalida.

## Observacoes de uso

- as telas de auditoria compartilham filtros, paginacao e leitura por tabela;
- `Cold storage` adiciona verificacao de integridade e certificado por data;
- `Simulador` depende de token de simulacao recebido pela aplicacao;
- as telas de `Acesso negado` e `Pagina nao encontrada` sao informativas e nao expoem configuracoes operacionais.
