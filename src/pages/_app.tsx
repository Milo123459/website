import {
	GeistProvider,
	CssBaseline,
	Page,
	Breadcrumbs,
	Select,
	Container,
	Spacer,
} from '@geist-ui/react';
import 'modern-normalize/modern-normalize.css';
import 'inter-ui/inter.css';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import useDarkMode from 'use-dark-mode';
import { Home, TrendingUp, Inbox, Tv } from '@geist-ui/react-icons';

function MyApp({ Component, pageProps }) {
	const route = useRouter();
	const darkMode = useDarkMode(true);
	const themeType = darkMode.value == true ? 'light' : 'dark';
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
			<GeistProvider themeType={themeType}>
				<CssBaseline />
				<Page dotBackdrop>
					<Container>
						<Breadcrumbs size="medium">
							<NextLink href="/">
								<Breadcrumbs.Item
									nextLink
									aria-disabled={route.route == '/'}
									style={{ color: route.route == '/' ? '#333' : '' }}
								>
									<Home />
								</Breadcrumbs.Item>
							</NextLink>
							<NextLink href="/stats">
								<Breadcrumbs.Item
									nextLink
									aria-disabled={route.route == '/stats'}
									style={{ color: route.route == '/stats' ? '#333' : '' }}
								>
									<TrendingUp />
								</Breadcrumbs.Item>
							</NextLink>
							<NextLink href="/notifications">
								<Breadcrumbs.Item
									nextLink
									aria-disabled={route.route == '/notifications'}
									style={{
										color: route.route == '/notifications' ? '#333' : '',
									}}
								>
									<Inbox />
								</Breadcrumbs.Item>
							</NextLink>
							<NextLink href="/tuber">
								<Breadcrumbs.Item
									nextLink
									aria-disabled={route.route == '/tuber'}
									style={{ color: route.route == '/tuber' ? '#333' : '' }}
								>
									<Tv />
								</Breadcrumbs.Item>
							</NextLink>
							<NextLink href="/notes">
								<Breadcrumbs.Item
									nextLink
									aria-disabled={route.route == '/notes'}
									style={{ color: route.route == '/notes' ? '#333' : '' }}
								>
									NOTEPAD_ICON
								</Breadcrumbs.Item>
							</NextLink>
						</Breadcrumbs>
						<Spacer x={0.5} />
						<Select initialValue={themeType} onChange={darkMode.toggle}>
							<Select.Option value="light">Light</Select.Option>
							<Select.Option value="dark">Dark</Select.Option>
						</Select>
					</Container>
					<Component {...pageProps} />
				</Page>
			</GeistProvider>
		</>
	);
}

export default MyApp;
