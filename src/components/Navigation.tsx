import Link from './Link';
import Container from './Container';
import { Fragment } from 'react';

const links: { href: string; text: string }[] = [
	{
		href: '/',
		text: 'home',
	},
	{
		href: '/projects',
		text: 'projects',
	},
];

export default function Navigation() {
	return (
		<div>
			<Container horizontal>
				{links.map((link, index) => {
					const should_render_line = index !== links.length - 1;
					if (should_render_line) {
						return (
							<Fragment key={link.href}>
								<Link href={link.href}>{link.text}</Link>
								<span className="text-gray-700 dark:text-white">|</span>
							</Fragment>
						);
					} else {
						return (
							<Fragment key={link.href}>
								<Link href={link.href}>{link.text}</Link>
							</Fragment>
						);
					}
				})}
			</Container>
		</div>
	);
}
