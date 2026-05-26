# Campanhas

URL principal: `https://admin.standdigital.com.br/compartilhamentos/campanhas`

Fluxos relacionados:

- administrar campanhas estruturadas;
- criar compartilhamento institucional da empresa;
- abrir leitura detalhada de uma campanha especifica.

## Objetivo da tela

Analisar a performance das campanhas usadas nos compartilhamentos e manter o cadastro operacional dessas campanhas.

## O que existe na tela

- filtro de periodo;
- botao `Administrar`;
- botao `Criar compartilhamento`;
- ranking de campanhas no periodo;
- leitura de acessos, leads unicos, contatos e taxa por campanha;
- drill-down por campanha selecionada;
- evolucao temporal da campanha;
- ranking de corretores que usaram a campanha;
- modal de gerenciamento de campanhas;
- wizard de compartilhamento da empresa.

## O que os termos significam

- `Campanha`: identificador comercial usado para rastrear a origem do link.
- `Acessos`: total de entradas geradas pelos links daquela campanha.
- `Leads unicos`: visitantes sem duplicidade no periodo.
- `Contatos`: conversoes registradas a partir dos acessos.
- `Taxa`: relacao percentual entre contatos e acessos.
- `Sem campanha`: compartilhamento sem vinculo com campanha nomeada.

## O que a informacao representa

- o ranking mostra quais campanhas geraram mais volume ou mais eficiencia;
- o drill-down ajuda a separar desempenho da campanha do desempenho individual dos corretores;
- a evolucao temporal mostra concentracao de resultado ao longo do periodo;
- o ranking interno de corretores mostra quem executou melhor dentro da campanha selecionada.

## Como interpretar a tela

- campanha com muito acesso e baixa taxa pode indicar boa distribuicao com baixa qualificacao;
- campanha com pouco acesso e taxa alta pode ser eficiente, mas com alcance limitado;
- campanha concentrada em poucos corretores pode depender demais de execucao individual;
- crescimento sustentado ao longo do periodo costuma indicar campanha ativa e bem distribuida.

## Como usar

1. Ajuste o periodo desejado.
2. Revise o ranking principal de campanhas.
3. Clique em uma campanha para abrir o drill-down.
4. Analise KPIs, evolucao temporal e ranking de corretores.
5. Use `Administrar` para manter o cadastro das campanhas.
6. Use `Criar compartilhamento` quando precisar gerar um link institucional da empresa.

## Como fazer

### Ver o ranking geral de campanhas

1. Acesse `https://admin.standdigital.com.br/compartilhamentos/campanhas`.
2. Ajuste o periodo no topo.
3. Consulte a tabela `Ranking de campanhas no periodo`.
4. Compare acessos, leads unicos, contatos e taxa.

### Abrir o detalhe de uma campanha

1. Na listagem principal, clique sobre a campanha desejada.
2. Veja os KPIs da campanha.
3. Analise o grafico `Evolucao no periodo`.
4. Revise a tabela `Corretores nesta campanha`.
5. Use `Todas as campanhas` para voltar ao ranking geral.

### Criar uma nova campanha estruturada

1. Clique em `Administrar`.
2. Use `Nova campanha`.
3. Preencha o nome.
4. Informe data de inicio e data de termino, se houver.
5. Salve o cadastro.

### Encerrar ou reativar uma campanha

1. Abra `Administrar`.
2. Localize a campanha na tabela.
3. Use o botao de encerrar para parar uma campanha vigente ou futura.
4. Use o botao de reativar quando a campanha tiver sido encerrada manualmente.

### Excluir uma campanha

1. Abra `Administrar`.
2. Localize a campanha desejada.
3. Clique em excluir.
4. Confirme a remocao.
5. Considere que os compartilhamentos antigos nao perdem o historico do nome usado.

## Regras e validacoes

- campanhas encerradas manualmente nao aparecem como vigentes no fluxo de criacao de compartilhamento;
- campanhas com data futura nao entram como opcao ativa ate a data de inicio;
- campanhas expiradas ficam fora da selecao operacional, mas continuam relevantes para leitura historica;
- o nome da campanha aceita ate 100 caracteres;
- exclusao remove o cadastro da campanha, nao os compartilhamentos que ja usaram esse nome.

## Perguntas e respostas

### A campanha precisa existir para eu criar um link?

Nao obrigatoriamente. O sistema tambem aceita `Sem campanha`, mas o cadastro estruturado melhora o rastreamento.

### Campanha encerrada some dos relatorios?

Nao. Ela deixa de ser opcao ativa de uso, mas continua aparecendo quando houve dados no periodo consultado.

### Posso ter campanha sem data de fim?

Sim. Nesse caso ela continua disponivel ate ser encerrada manualmente.

### Excluir uma campanha apaga os links criados?

Nao. Os compartilhamentos existentes permanecem funcionando e o historico continua associado ao nome usado no momento da criacao.
