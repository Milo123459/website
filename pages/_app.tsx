import '../styles/globals.css';
import 'modern-normalize/modern-normalize.css';
import React, { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	const [isMounted, setIsMounted] = useState(false);
	const darkMode = useDarkMode(true);
	const theme: { bg: string; fontColor: string } = darkMode.value
		? darkTheme
		: lightTheme;

	useEffect(() => {
		setIsMounted(true);
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<meta property="og:title" content="Milo123459" />
				<meta
					property="og:description"
					content="Personal website for Milo123459."
				/>
			</Head>
			{isMounted && <Component {...pageProps} theme={theme} />}
		</ThemeProvider>
	);
}

export default MyApp;
