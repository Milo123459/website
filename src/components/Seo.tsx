import Head from 'next/head';

export default function SEO({ page }: Props) {
	return (
		<Head>
			<title>Milo&apos;s Website - {page}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="Rithul's portfolio" />
			<meta name="author" content="Rithul Kamesh" />
			<meta name="author" content="rithulkamesh" />
			<link
				rel="apple-touch-icon"
				href="https://avatars.githubusercontent.com/u/50248166?v=4"
			/>
			<link
				rel="shortcut icon"
				href="https://avatars.githubusercontent.com/u/50248166?v=4"
				type="image/x-icon"
			/>
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@rithulkamesh" />
			<meta name="twitter:creator" content="@rithulkamesh" />
			<meta
				name="twitter:image"
				content="https://avatars.githubusercontent.com/u/50248166?v=4"
			/>
			<meta property="og:site_name" content="Rithul Kamesh's portfolio" />
			<meta property="og:type" content="website" />
			<meta
				property="og:image"
				content="https://avatars.githubusercontent.com/u/50248166?v=4"
			/>
			<meta name="theme-color" content="#bb240c" />
		</Head>
	);
}
interface Props {
	page: string;
}
