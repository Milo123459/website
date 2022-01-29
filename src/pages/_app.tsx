import 'modern-normalize/modern-normalize.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from '../components/Navigation';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<Navigation />
			<div className="md:h-screen">
				<Component {...pageProps} />
			</div>
			<Head>
				<title>milo.solar</title>
			</Head>
		</Fragment>
	);
}

export default MyApp;
