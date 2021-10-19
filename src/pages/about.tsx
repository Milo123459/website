import { Text, Grid } from '@geist-ui/react';
import Transition from '../components/Transition';
import Link from 'next/link';

export default function About() {
	return (
		<>
			<Grid.Container justify="center">
				<Transition delay={0.4}>
					<Text h1>About me</Text>
				</Transition>
			</Grid.Container>
			<Grid.Container justify="center">
				<Transition delay={0.8}>
					<Text p>
						Hey! I&apos;m Milo, and I have been programming for 2 years. I
						started off with <code>JavaScript</code>, moved onto{' '}
						<code>TypeScript</code>, then at the start of 2021, looked into
						Rust. Almost all of my new projects have been written in{' '}
						<code>Rust</code>, and I love it for its performance and DX. Aside
						from how I started programming, my pronouns are <code>he/him</code>,
						and if you want to chat with me, you can send me a PM on Twitter{' '}
						<Link passHref href="https://twitter.com/salvagedev">
							<code>@salvagedev</code>
						</Link>
						.
					</Text>
				</Transition>
			</Grid.Container>
		</>
	);
}
