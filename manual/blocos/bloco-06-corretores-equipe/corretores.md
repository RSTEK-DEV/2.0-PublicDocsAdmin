# Corretores

URL principal: `https://admin.standdigital.com.br/brokers/users`

Links relacionados:

- `https://admin.standdigital.com.br/config/ajustes?tab=corretores&focus=corretores-cadastro`
- `https://admin.standdigital.com.br/config/ajustes?tab=corretores&focus=corretores-invite`
- `https://admin.standdigital.com.br/config/ajustes?tab=corretores&focus=corretores-crm`

## Objetivo da tela

Gerenciar o cadastro operacional dos corretores, acompanhando aprovacao, status do perfil e importacao em lote.

## O que existe na tela

- cabecalho com total de corretores e distribuicao por aprovados, pendentes e reprovados;
- abas `Aprovados`, `Pendentes` e `Reprovados`;
- botao `Importar planilha`;
- campo de busca por nome, email, CRECI ou CPF;
- filtros adicionais de estado do CRECI, status, onboarding, foto de perfil e aceite de dados publicos;
- grade com avatar, nome, email, CRECI, status e acoes;
- acoes por linha para visualizar, editar, aprovar, reprovar, ativar, desativar e excluir;
- acoes em lote quando ha selecao de multiplos registros;
- dialogo de detalhes do corretor;
- fluxo para completar perfil quando o cadastro estiver incompleto.

## Como usar

1. Escolha a aba conforme o status que deseja analisar.
2. Use a busca para localizar um corretor especifico.
3. Abra `Filtros Adicionais` se precisar refinar a lista.
4. Use as acoes da linha para tratar um corretor individualmente.
5. Se precisar cadastrar varios registros, use `Importar planilha`.

## Como fazer

### Aprovar um corretor pendente

1. Acesse `https://admin.standdigital.com.br/brokers/users`.
2. Abra a aba `Pendentes`.
3. Localize o corretor.
4. Clique na acao de aprovar.

### Reprovar um corretor

1. Abra a aba `Pendentes` ou `Aprovados`.
2. Localize o corretor.
3. Use a acao de reprovar na linha correspondente.

### Importar corretores por planilha

1. Clique em `Importar planilha`.
2. Envie um arquivo `.csv`, `.xlsx` ou `.xls`.
3. Baixe o modelo, se necessario, para seguir as colunas esperadas.
4. Mapeie as colunas obrigatorias e opcionais.
5. Valide os dados.
6. Prossiga com `Importar corretores`.

### Ver detalhes de um corretor

1. Localize o registro na grade.
2. Clique em visualizar.
3. Consulte dados basicos, contatos, documentos, onboarding e aceite de dados publicos.

### Ajustar cadastro, convite ou CRM dos corretores

1. Abra `https://admin.standdigital.com.br/config/ajustes?tab=corretores&focus=corretores-config`.
2. Use a area de ajustes de corretores para definir cadastro aberto, link de convite e URL do CRM.

## Perguntas e respostas

### Posso importar varios corretores de uma vez?

Sim. A tela possui importacao em lote com validacao antes do envio.

### O que acontece se a planilha tiver erros?

O sistema mostra a validacao por campo e permite prosseguir apenas com as linhas validas.

### Onde altero regras de convite ou auto cadastro?

Essas configuracoes ficam em `Ajustes > Corretores`, nao na lista de usuarios.

### A tela mostra se o corretor concluiu onboarding?

Sim. Isso pode ser visto nos filtros, nos indicadores de status e no detalhe do usuario.
