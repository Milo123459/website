import React from 'react';
import { Text, Link, Spacer, Container, Loading } from '@geist-ui/react';
import styles from '../styles/Components.module.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { UserInformation } from '../typings/UserResponse';
import { Twitter, Github, Youtube } from '@geist-ui/react-icons';

const queryClient = new QueryClient();

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
				<b>|</b>
				<Spacer x={0.3} />
				<Link href="https://youtube.com/salvagedev">
					<Youtube />
				</Link>
			</Container>
			<Spacer />
			<QueryClientProvider client={queryClient}>
				<Stats />
			</QueryClientProvider>
		</>
	);
}

function Stats() {
	const { isLoading, error, data } = useQuery('stats', async () => {
		const data = await (
			await fetch('https://api.github.com/users/Milo123459')
		).json();
		return data as UserInformation;
	});

	if (isLoading) {
		return <Loading>Loading</Loading>;
	}
	if (error) {
		return (
			<Text h2 b color="errorLight">
				Error loading data.
			</Text>
		);
	}
	return <Text h3 b color="successLight"></Text>;
}
