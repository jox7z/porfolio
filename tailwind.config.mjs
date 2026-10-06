/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			// Paleta compartida con el Media Kit de Jox Physique (ver Layout.astro)
			colors: {
				bg: token('bg'),
				surface: token('surface'),
				ink: token('ink'),
				body: token('body'),
				muted: token('muted'),
				line: token('line'),
				accent: token('accent'),
				accent2: token('accent2'),
			},
			fontFamily: {
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
		},
	},
	plugins: [],
}
