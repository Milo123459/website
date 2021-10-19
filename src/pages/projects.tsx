import { Text, Grid, Link, Spacer } from '@geist-ui/react';
import Transition from '../components/Transition';
import { Fragment } from 'react';
import NextLink from 'next/link';
import Coding from '../components/Coding';

interface Project {
	name: string;
	link: string;
	description: string;
}

const projects: Project[] = [
	{
		name: 'Glitter',
		link: 'https://github.com/Milo123459/glitter',
		description: 'A simple, yet powerful way of templating commit messages',
	},
	{
		name: 'GreenwichDB',
		link: 'https://github.com/GreenwichDB/GreenwichDB',
		description:
			"Go back to the start of time, where DataStores weren't complex. (Roblox)",
	},
];

export default function Home() {
	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>Projects</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Coding />
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Text>
						{projects.map((project, index) => {
							return (
								<Fragment key={index}>
									<NextLink href={project.link} passHref>
										<Link icon color>
											{project.name}
										</Link>
									</NextLink>{' '}
									- {project.description}
									{index === projects.length - 1 ? null : <Spacer />}
								</Fragment>
							);
						})}
					</Text>
				</Transition>
			</Grid.Container>
		</>
	);
}
