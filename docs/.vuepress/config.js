const sidebar = require('./sidebar');

const hostname = 'https://clover.coex.tech/';
const allowedTags = ['font', 'center', 'nobr']; // allow using some deprecated and non-standard html tags

module.exports = {
	lang: 'en-US',
	title: 'Clover',
	description: 'Clover Drone Kit',
	// theme and its config
	theme: '@vuepress/theme-default',
	themeConfig: {
		logo: 'clover-logo.png',
		sidebar: {
			'/ru/': sidebar.readSummary("./ru/SUMMARY.md"),
			'/en/': sidebar.readSummary("./en/SUMMARY.md"),
		},
		sidebarDepth: 0,
		locales: {
			'/en/': {
				selectLanguageName: 'English',
				navbar: [
					{ text: 'Official Site', link: 'https://coex.tech' },
					{ text: 'Support Chat', link: 'https://t.me/COEXHelpdesk' },
				]
			},
			'/ru/': {
				selectLanguageName: 'Русский',
				tip: 'СОВЕТ',
				warning: 'ВНИМАНИЕ',
				danger: 'ОПАСНО',
				toggleDarkMode: 'Переключить темную тему',
				navbar: [
					{ text: 'Сайт', link: 'https://coex.tech' },
					{ text: 'Чат поддержки', link: 'https://t.me/COEXHelpdesk' },
				]
			},
		},
		toggleSidebar: true,
		repo: 'CopterExpress/clover',
		docsBranch: 'master',
		docsDir: 'docs',
		lastUpdated: false,
		contributors: false
	},
	pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!ru/metodmaterials.md'],
	locales: {
		'/en/': {
			lang: 'en',
			title: 'Clover',
			description: 'Clover Drone Kit'
		},
		'/ru/': {
			lang: 'ru',
			title: 'Клевер',
			description: 'Конструктор квадрокоптера «Клевер»'
		}
	},
	markdown: {
		code: {
			lineNumbers: false
		},
		linkify: true,
	},
	extendsMarkdown(md) {
		md.use(require('markdown-it-attrs')); // to use custom headers anchors
	},
	bundlerConfig: {
		vuePluginOptions: {
			template: {
				compilerOptions: {
					isCustomElement: tag => allowedTags.includes(tag)
				}
			}
		}
	},
	plugins: [
		'@vuepress/plugin-search',
		'vuepress-plugin-copy-code2',
		['sitemap2', { hostname, excludeUrls: ['/LANGS.html'] }],
		require('./rich-quotes')
	]
}
