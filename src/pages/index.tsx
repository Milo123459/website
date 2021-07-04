import React from 'react';
import { Text, Link, Spacer } from '@geist-ui/react';
import styles from '../styles/Components.module.css';

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
		</>
	);
}
