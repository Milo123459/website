import Document, { Html, Head, Main } from 'next/document';
import DeferNextScript from '../utils/deferNextScrpit';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<DeferNextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
