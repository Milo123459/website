import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import React from 'react';
import Head from 'next/head';
import 'reflect-metadata';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta property="og:title" content="Milo123459" />
				<meta
					property="og:description"
					content="Personal website for Milo123459."
				/>
				<title>Milo123459</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
