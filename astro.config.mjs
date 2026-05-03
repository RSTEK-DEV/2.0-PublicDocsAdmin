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
					badge: { text: '+2.1', variant: 'success' },
					autogenerate: { directory: '01-acesso-e-conta' },
				},
				{
					label: 'Empreendimentos',
					collapsed: true,
					badge: { text: '+2.1', variant: 'success' },
					autogenerate: { directory: '02-empreendimentos' },
				},
				{
					label: 'Configuração do Empreendimento',
					collapsed: true,
					badge: { text: '+2.1', variant: 'success' },
					autogenerate: { directory: '03-configuracao-do-empreendimento' },
				},
				{
					label: 'Conteúdo Comercial',
					collapsed: true,
					badge: { text: '+2.1', variant: 'success' },
					autogenerate: { directory: '04-conteudo-comercial' },
				},
				{
					label: 'Estatísticas e Inteligência',
					collapsed: true,
					badge: { text: '+2.1', variant: 'success' },
					autogenerate: { directory: '05-estatisticas-e-inteligencia' },
				},
				{
					label: 'Equipe e Permissões',
					collapsed: true,
					badge: { text: '+2.1', variant: 'success' },
					autogenerate: { directory: '06-equipe-e-permissoes' },
				},
				{
					label: 'Configurações e Integrações',
					collapsed: true,
					badge: { text: '+2.1', variant: 'success' },
					autogenerate: { directory: '07-configuracoes-e-integracoes' },
				},
				{
					label: 'Auditoria e Suporte Operacional',
					collapsed: true,
					badge: { text: '+2.1', variant: 'success' },
					autogenerate: { directory: '08-auditoria-e-suporte' },
				},
			],
		}),
	],
});
