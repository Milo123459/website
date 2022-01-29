import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="system">
				<Navigation />
				<Component {...pageProps} />
			</ThemeProvider>
			<Head>
				<title>milo.solar</title>
			</Head>
		</>
	);
}

export default MyApp;
