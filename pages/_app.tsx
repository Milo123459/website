import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta property="og:title" content="AMilo123459" />
				<meta
					property="og:description"
					content="Personal website for Milo123459."
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
