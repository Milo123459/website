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
import moilo from '../themes/moilo';


function MyApp({ Component, pageProps }) {
	const [themeType] = useState('dark');
	return (
		<>
			<SEO />
			<GeistProvider themes={[moilo]} themeType={'Moilo'}>
				<CssBaseline />
				<Page dotBackdrop>
					<NavBreadCrumb />
					<Spacer />
					<Component {...pageProps} />
						<Footer /> 
				</Page>
			</GeistProvider>
		</>
	);
}

export default MyApp;
