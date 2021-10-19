import { Text, Grid, Link, Spacer } from '@geist-ui/react';
import Transition from '../components/Transition';
import NextLink from 'next/link';
import { Fragment } from 'react';

interface Where {
	title: string;
	where: string;
	href: string;
}

const Locations: Where[] = [
	{
		title: 'Helper',
		where: 'Railway',
		href: 'https://railway.app',
	},
	{
		title: 'Lead developer',
		where: 'Observer',
		href: 'https://discord.gg/HkFGjvVeqq',
	},
	{
		title: 'Lead developer',
		where: 'Glitter',
		href: 'https://github.com/Milo123459/glitter',
	},
];

export default function Where() {
	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>Where I do stuff</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Text p>
						{Locations.map((location, index) => {
							return (
								<Fragment key={index}>
									<code>{location.title}</code> @{' '}
									<NextLink href={location.href} passHref>
										<Link icon color>
											<code>{location.where}</code>
										</Link>
									</NextLink>
									{index === Locations.length - 1 ? null : <Spacer />}
								</Fragment>
							);
						})}
					</Text>
				</Transition>
			</Grid.Container>
		</>
	);
}
