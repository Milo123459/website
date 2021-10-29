import { Text, Grid } from '@geist-ui/react';
import Transition from '../components/Transition';

export default function Home() {
	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>Oh no! Something went wrong</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Text p>
						There was an error on that page. Sorry! (Check the console for more
						details)
					</Text>
				</Transition>
			</Grid.Container>
		</>
	);
}
