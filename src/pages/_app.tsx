import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
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
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
