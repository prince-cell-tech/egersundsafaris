// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.egersundtanzaniasafaris.com',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'no', 'sv', 'da', 'zh', 'de'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en',
					no: 'no',
					sv: 'sv',
					da: 'da',
					zh: 'zh-CN',
					de: 'de',
				},
			},
		}),
	],
});
