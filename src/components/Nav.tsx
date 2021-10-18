import { Home } from '@geist-ui/react-icons';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Breadcrumbs, Grid, Button } from '@geist-ui/react';
import { useRouter } from 'next/router';
export default function NavBreadCrumb() {
	const [themeType, setThemeType] = useState('light');
	const switchThemes = () => {
		setThemeType((last) => (last === 'dark' ? 'light' : 'dark'));
	};
	const route = useRouter();
	return (
		<>
			<Grid.Container justify="center">
				<Breadcrumbs>
					<Fragment key={0}>
						<Link href={'/'} passHref>
							<Breadcrumbs.Item
								nextLink
								aria-disabled={route.route === '/'}
								style={{
									color: route.route === '/' ? '#59a1f7' : '',
								}}
							>
								<Home />
							</Breadcrumbs.Item>
						</Link>
					</Fragment>
				</Breadcrumbs>
			</Grid.Container>
		</>
	);
}
