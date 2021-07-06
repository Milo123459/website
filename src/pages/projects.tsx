import React from 'react';
import { Text, Spacer, Container, Link } from '@geist-ui/react';
import { Github } from '@geist-ui/react-icons';

export default function Projects() {
	return (
		<>
			<Spacer />
			<Text h1 b>
				Projects
			</Text>
			<Text p>All of my projects</Text>
			<Container>
				<Text p>
					<b>vext</b> - A code editor that lives in the terminal.{' '}
					<Link href="https://github.com/Milo123459/vext">
						<Github />
					</Link>
				</Text>
				<Spacer />
			</Container>
		</>
	);
}
