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
				<script async src="https://arc.io/widget.min.js#ESikLuGk"></script>
			</Head>
			{isMounted && <Component {...pageProps} theme={theme} />}
		</ThemeProvider>
	);
}

export default MyApp;
