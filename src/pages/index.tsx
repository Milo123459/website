import React from 'react';
import { Text, Link, Spacer, Container } from '@geist-ui/react';
import styles from '../styles/Components.module.css';
import { Twitter, Github, Youtube } from '@geist-ui/react-icons';

export default function Home() {
	return (
		<>
			<Text h1 b>
				Hey. I&apos;m Milo.
			</Text>
			<Spacer />
			<Text h2 b>
				I like to code things, mainly projects using{' '}
				<Link
					href="https://rust-lang.org"
					className={styles['hover-underline-animation']}
				>
					Rust
				</Link>
			</Text>
			<Spacer />
			<Container>
				<Link href="https://twitter.com/salvagedev">
					<Twitter />
				</Link>
				<Spacer x={0.3} />
				<b>|</b>
				<Spacer x={0.3} />
				<Link href="https://git.io/milo">
					<Github />
				</Link>
				<Spacer x={0.3} />
				<b>|</b>
				<Spacer x={0.3} />
				<Link href="https://youtube.com/salvagedev">
					<Youtube />
				</Link>
			</Container>
		</>
	);
}
