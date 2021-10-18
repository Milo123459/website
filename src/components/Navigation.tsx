import { Home, List } from '@geist-ui/react-icons';
import { Fragment } from 'react';
import Link from 'next/link';
import { Breadcrumbs, Grid } from '@geist-ui/react';
import { useRouter } from 'next/router';

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
		href: '/projects',
		icon: List,
	},
];

export default function NavBreadCrumb() {
	const route = useRouter();
	return (
		<>
			<Grid.Container justify="center">
				<Breadcrumbs>
					{breadcrumbs.map((breadcrumb, index) => {
						return (
							<Fragment key={index}>
								<Link href={breadcrumb.href} passHref>
									<Breadcrumbs.Item
										nextLink
										aria-disabled={route.route === breadcrumb.href}
										style={{
											color: route.route === breadcrumb.href ? '#59a1f7' : '',
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
		</>
	);
}
