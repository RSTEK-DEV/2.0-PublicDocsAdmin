// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
	
	site: isGithubPages
		? 'https://rstek-dev.github.io'  // ← CORRIGIDO: GitHub Pages quando GITHUB_PAGES=true
		: 'https://adm-docs.standdigital.com.br',

	base: isGithubPages
		? '/2.0-PublicDocsAdmin/'  // ← CORRIGIDO: precisa da base quando no GitHub Pages
		: '/',

	integrations: [
		starlight({
			title: '',
			customCss: ['./src/assets/style.css'],
			locales: {
				root: {
					label: 'Português (Brasil)',
					lang: 'pt-BR',
				},
			},
			description: 'A plataforma completa para lançamentos imobiliários.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/RSTEK-DEV',
				},
			],
			logo: {
				src: '/src/assets/logo.svg',
				alt: 'Logomarca StandDigital',
			},
			sidebar: [
				{
					label: 'Contrate hoje mesmo',
					link: 'https://wa.me/5511988157196',
					attrs: { target: '_blank', class: 'cta-button' },
				},
				{
					label: 'Visão Geral',
					collapsed: true,
					badge: { text: '+2.1', variant: 'success' },
					autogenerate: { directory: '00-visao-geral' },
				},
				{
					label: 'Acesso e Conta',
					collapsed: true,
					autogenerate: { directory: '01-acesso-e-conta' },
				},
				{
					label: 'Empreendimentos',
					collapsed: true,
					items: [
						{ label: 'Empreendimentos', slug: '02-empreendimentos/empreendimentos' },
						{ label: 'Novo Empreendimento', slug: '02-empreendimentos/novo-empreendimento' },
						{ label: 'Contratar Projeto', slug: '02-empreendimentos/contratar-projeto' },
						{ label: 'Situação do Empreendimento', slug: '02-empreendimentos/situacao-do-empreendimento' },

						{
							label: 'Configuração',
							collapsed: true,
							autogenerate: { directory: '02-empreendimentos/Configuração' },
						},
						{
							label: 'Comercial e Marketing',
							collapsed: true,
							autogenerate: { directory: '02-empreendimentos/conteudo-comercial' },
						},
					],
				},
				{
					label: 'Inteligência de Negócio',
					collapsed: true,
					items: [
						{ label: 'Resumo de Vendas', slug: '04-inteligencia-negocio/resumo-de-vendas' },
						{ label: 'Redator Inteligente', slug: '04-inteligencia-negocio/redator-inteligente' },
						{ label: 'Analisador de Imagem', slug: '04-inteligencia-negocio/analisador-de-imagem' },
					],
				},
				{
					label: 'Estatísticas e Inteligência',
					collapsed: true,
					items: [
						{ label: 'Como Usar Estatísticas', slug: '05-estatisticas-e-inteligencia/como-usar-estatisticas' },
						{ label: 'Funil Comercial Imobiliário', slug: '05-estatisticas-e-inteligencia/leitura-do-funil-comercial-imobiliario' },
						{ label: 'Decisões por Fase do Lançamento', slug: '05-estatisticas-e-inteligencia/decisoes-por-fase-do-lancamento' },
						{ label: 'Diagnóstico de Canais e Campanhas', slug: '05-estatisticas-e-inteligencia/diagnostico-de-canais-e-campanhas' },
						{ label: 'Glossário de Métricas', slug: '05-estatisticas-e-inteligencia/glossario-de-metricas' },
						{ label: 'Métricas e Insights', slug: '05-estatisticas-e-inteligencia/metricas-e-insights' },
						{
							label: 'Compartilhamento e Campanhas',
							collapsed: true,
							autogenerate: { directory: '05-estatisticas-e-inteligencia/compartilhamento-e-campanhas' },
						},
						{
							label: 'Analytics',
							collapsed: true,
							autogenerate: { directory: '05-estatisticas-e-inteligencia/analytics' },
						},
					],
				},
				{
					label: 'Equipe e Permissões',
					collapsed: true,
					autogenerate: { directory: '06-equipe-e-permissoes' },
				},
				{
					label: 'Configurações e Integrações',
					collapsed: true,
					autogenerate: { directory: '07-configuracoes-e-integracoes' },
				},
				{
					label: 'Auditoria e Suporte Operacional',
					collapsed: true,
					autogenerate: { directory: '08-auditoria-e-suporte' },
				},
			],
		}),
	],
});
