import { GeistProvider, CssBaseline, Page } from '@geist-ui/react';
import 'modern-normalize/modern-normalize.css';
import 'inter-ui/inter.css';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta property="og:title" content="Milo123459" />
				<meta
					property="og:description"
					content="Welcome to Milo's personal website. Here is the home of where I write about projects, and where you can learn more about me."
				/>
				<title>Milo123459</title>
			</Head>
			<GeistProvider>
				<CssBaseline />
				<Page dotBackdrop>
					<Component {...pageProps} />
				</Page>
			</GeistProvider>
		</>
	);
}

export default MyApp;
