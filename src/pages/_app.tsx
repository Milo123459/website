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
import { Home, Activity } from '@geist-ui/react-icons';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

interface Props extends React.SVGProps<SVGElement> {
	color?: string;
	size?: number | string;
}

interface Breadcrumb {
	href: string;
	icon: React.FunctionComponent<Props>;
}

const breadcrumbs: Breadcrumb[] = [
	{
		href: '/',
		icon: Home,
	},
	{
		href: '/stalk',
		icon: Activity,
	},
];

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
							{breadcrumbs.map((breadcrumb, index) => {
								return (
									<Fragment key={index}>
										<Link href={breadcrumb.href} passHref>
											<Breadcrumbs.Item
												nextLink
												aria-disabled={route.route == breadcrumb.href}
												style={{
													color:
														route.route == breadcrumb.href ? '#59a1f7' : '',
												}}
											>
												<breadcrumb.icon />
											</Breadcrumbs.Item>
										</Link>
									</Fragment>
								);
							})}
						</Breadcrumbs>
					</Grid.Container>
					<Component {...pageProps} />
				</Page>
			</GeistProvider>
		</>
	);
}

export default MyApp;
