import 'modern-normalize/modern-normalize.css';
import 'inter-ui/inter.css';
import {
	GeistProvider,
	CssBaseline,
	Page,
	Spacer,
	Themes,
} from '@geist-ui/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBreadCrumb from '../components/Nav';
import SEO from '../components/Seo';
import Footer from '../components/Footer';
import '../css/globals.css';
const theme = Themes.createFromDark({
	type: 'Moilo',
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

function MyApp({ Component, pageProps }) {
	const [themeType] = useState('dark');
	return (
		<>
			<SEO />
			<GeistProvider themes={[theme]} themeType={'Moilo'}>
				<CssBaseline />
				<Page dotBackdrop>
					<NavBreadCrumb />
					<Spacer />
					<Component {...pageProps} />
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {
								scale: 0.8,
								opacity: 0,
							},
							visible: {
								scale: 1,
								opacity: 1,
								transition: {
									delay: 1.2,
								},
							},
						}}
					>
						<Footer />
					</motion.div>
				</Page>
			</GeistProvider>
		</>
	);
}

export default MyApp;
