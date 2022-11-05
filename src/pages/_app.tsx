import 'modern-normalize/modern-normalize.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Navigation from '../components/Navigation';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<Fragment>
			<div className="flex justify-center">
				<div>
					<Navigation />
				</div>
			</div>
			<div className="flex justify-center">
				<div>
					<Component {...pageProps} />
				</div>
			</div>
			<Head>
				<title>milo.solar</title>
				<meta
					property="og:image"
					content={`https://milo.solar/api/og?lower=${router.asPath.slice(1)}`}
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Analytics />
		</Fragment>
	);
}

export default MyApp;
