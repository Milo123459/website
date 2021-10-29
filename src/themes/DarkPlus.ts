import { Themes } from '@geist-ui/react';

const moilo = Themes.createFromDark({
	type: 'DarkPlus',
	palette: {
		accents_1: '#111',
		accents_2: '#333',
		accents_3: '#444',
		accents_4: '#666',
		accents_5: '#888',
		accents_6: '#999',
		accents_7: '#eaeaea',
		accents_8: '#fafafa',
		background: '#000',
		foreground: '#fff',
		selection: '#b2b7bf',
		secondary: '#888',
		code: '#79ffe1',
		border: '#333',
		link: '#3291ff',
	},
	expressiveness: {
		dropdownBoxShadow: '0 0 0 1px #333',
		shadowSmall: '0 0 0 1px #333',
		shadowMedium: '0 0 0 1px #333',
		shadowLarge: '0 0 0 1px #333',
		portalOpacity: 0.75,
	},
});

export default moilo;
