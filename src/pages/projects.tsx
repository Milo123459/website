import { Text, Grid, Link, Spacer } from '@geist-ui/react';
import Transition from '../components/Transition';
import { Fragment } from 'react';
import NextLink from 'next/link';
import { projects } from '../static/projects';

export default function Home() {
	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>Open-Source Projects</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Text>
						{projects.map((project, index) => {
							return (
								<Fragment key={index}>
									<NextLink href={`/projects/${project.name}`} passHref>
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
