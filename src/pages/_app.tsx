import 'modern-normalize/modern-normalize.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import Navigation from '../components/Navigation';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
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
			</Head>
			{process.env.NODE_ENV === 'production' ? (
				<>
					<Script async src="https://arc.io/widget.min.js#TbGGrA4L" />
					<Script
						async
						defer
						data-custom-id="822bf80b-b46c-45d0-82a6-f483acde0287"
						src="https://umami.milo.solar/umami.js"
						strategy="worker"
					/>
				</>
			) : null}
		</Fragment>
	);
}

export default MyApp;
