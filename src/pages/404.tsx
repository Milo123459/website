import { Text, Grid } from '@geist-ui/react';
import Transition from '../components/Transition';

export default function Home() {
	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>Hey! Are you lost?</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Text p>
						The page you were looking for couldn&apos;t be found. Perhaps go
						home?
					</Text>
				</Transition>
			</Grid.Container>
		</>
	);
}
