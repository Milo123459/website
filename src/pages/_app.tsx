import 'modern-normalize/modern-normalize.css';
import 'inter-ui/inter.css';
import { GeistProvider, CssBaseline, Page, Spacer } from '@geist-ui/react';
import BreadCrumbs from '../components/Navigation';
import SEO from '../components/Seo';
import Footer from '../components/Footer';
import DarkPlus from '../themes/DarkPlus';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SEO />
			<GeistProvider themes={[DarkPlus]} themeType="DarkPlus">
				<CssBaseline />
				<Page>
					<BreadCrumbs />
					<Spacer />
					<Component {...pageProps} />
					<Footer />
				</Page>
			</GeistProvider>
		</>
	);
}

export default MyApp;
