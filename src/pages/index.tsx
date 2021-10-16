import { Text, Spacer, Grid } from '@geist-ui/react';
import OpenSourceProjects from '../components/OpenSourceProjects';

export default function Home() {
	return (
		<>
			<Spacer />
			<Text h1>Hey! I&apos;m Milo</Text>
			<Text h3>I like to program things.</Text>
			<Grid.Container>
				<OpenSourceProjects />
			</Grid.Container>
		</>
	);
}
