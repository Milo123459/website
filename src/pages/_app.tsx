import 'modern-normalize/modern-normalize.css';
import Head from 'next/head';
import 'inter-ui/inter.css';
import {
	GeistProvider,
	CssBaseline,
	Page,
	Breadcrumbs,
	Grid,
} from '@geist-ui/react';
import Link from 'next/link';
import { Home } from '@geist-ui/react-icons';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const route = useRouter();
	return (
		<>
			<Head>
				<meta property="og:title" content="Milo" />
				<meta
					property="og:description"
					content="Milo's website, to show off some cool things!"
				/>
				<title>Milo123459</title>
			</Head>
			<GeistProvider themeType="dark">
				<CssBaseline />

				<Page dotBackdrop>
					<Grid.Container>
						<Breadcrumbs>
							<Link href="/" passHref>
								<Breadcrumbs.Item
									nextLink
									aria-disabled={route.route == '/'}
									style={{ color: route.route == '/' ? '#59a1f7' : '' }}
								>
									<Home />
								</Breadcrumbs.Item>
							</Link>
						</Breadcrumbs>
					</Grid.Container>
					<Component {...pageProps} />
				</Page>
			</GeistProvider>
		</>
	);
}

export default MyApp;
