import Head from 'next/head';

export default function SEO({ page }: Props) {
	return (
		<Head>
			<title>Milo&apos;s Website - {page}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="og:description" content="Milo's personal website." />
		</Head>
	);
}
interface Props {
	page: string;
}
