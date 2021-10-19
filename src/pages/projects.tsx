import { Text, Grid } from '@geist-ui/react';
import OpenSourceProjects from '../components/OpenSourceProjects';
import Transition from '../components/Transition';

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
					<OpenSourceProjects />
				</Transition>
			</Grid.Container>
		</>
	);
}
