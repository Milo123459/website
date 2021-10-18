import { Text, Grid } from '@geist-ui/react';
import { motion } from 'framer-motion';
import Transition from '../components/Transition';

export default function Home() {
	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>Hey! &nbsp;I&apos;m Milo 👋</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Text p>I like to program things</Text>
				</Transition>
			</Grid.Container>
		</>
	);
}
