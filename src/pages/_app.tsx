import { GeistProvider, CssBaseline, Page, Breadcrumbs } from '@geist-ui/react';
import 'modern-normalize/modern-normalize.css';
import 'inter-ui/inter.css';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Home, TrendingUp } from '@geist-ui/react-icons';

function MyApp({ Component, pageProps }) {
	const route = useRouter();
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
					<Breadcrumbs>
						<NextLink href="/">
							<Breadcrumbs.Item nextLink aria-disabled={route.route == '/'}>
								<Home />
							</Breadcrumbs.Item>
						</NextLink>
						<NextLink href="/stats">
							<Breadcrumbs.Item
								nextLink
								aria-disabled={route.route == '/stats'}
							>
								<TrendingUp />
							</Breadcrumbs.Item>
						</NextLink>
					</Breadcrumbs>
					<Component {...pageProps} />
				</Page>
			</GeistProvider>
		</>
	);
}

export default MyApp;
