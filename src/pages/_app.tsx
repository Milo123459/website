import 'modern-normalize/modern-normalize.css';
import 'inter-ui/inter.css';
import { GeistProvider, CssBaseline, Page, Spacer } from '@geist-ui/react';
import NavBreadCrumb from '../components/Navigation';
import SEO from '../components/Seo';
import Footer from '../components/Footer';
import '../css/globals.css';
import DarkPlus from '../themes/DarkPlus';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SEO />
			<GeistProvider themes={[DarkPlus]} themeType="DarkPlus">
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
