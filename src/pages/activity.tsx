import { Text, Grid, Collapse } from '@geist-ui/react';
import Transition from '../components/Transition';
import Coding from '../components/Coding';

export default function Activity() {
	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>Activity</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Collapse.Group>
						<Collapse title="👨‍💻" subtitle="What I am currently coding.">
							<Coding />
						</Collapse>
					</Collapse.Group>
				</Transition>
			</Grid.Container>
		</>
	);
}
