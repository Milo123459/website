import {
	Home,
	List,
	Info,
	MapPin,
	Activity,
	Briefcase,
} from '@geist-ui/react-icons';
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
	startsWith?: boolean;
}

const breadcrumbs: Breadcrumb[] = [
	{
		href: '/',
		icon: Home,
	},
	{
		href: '/projects',
		icon: List,
		startsWith: true,
	},
	{
		href: '/about',
		icon: Info,
	},
	{
		href: '/where',
		icon: MapPin,
	},
	{
		href: '/activity',
		icon: Activity,
	},
	{
		href: '/blog',
		icon: Briefcase,
		startsWith: true,
	},
];

export default function BreadcrumbsComponent() {
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
										aria-disabled={
											breadcrumb?.startsWith
												? route.route.startsWith(breadcrumb.href)
												: route.route === breadcrumb.href
										}
										style={{
											color: (
												breadcrumb?.startsWith
													? route.route.startsWith(breadcrumb.href)
													: route.route === breadcrumb.href
											)
												? '#59a1f7'
												: '',
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
