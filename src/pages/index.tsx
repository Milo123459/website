import React from 'react';
import { Text, Link, Spacer, Container, Loading } from '@geist-ui/react';
import styles from '../styles/Components.module.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { UserInformation } from '../typings/UserResponse';
import { Twitter, Github, Youtube, Users } from '@geist-ui/react-icons';

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
				<Spacer x={0.3} />
				<b>|</b>
				<Spacer x={0.3} />
				<Link href="https://youtube.com/salvagedev">
					<Youtube />
				</Link>
			</Container>
			<Spacer />
			<Text h3 b>
				GitHub information
			</Text>
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
			<Text h2 b color="#FF1A1A">
				Error loading data.
			</Text>
		);
	}
	return (
		<Container>
			<Users />
			<Spacer x={0.3} />
			<Text h4>
				<Link
					className={styles['hover-underline-animation']}
					href="https://github.com/Milo123459?tab=followers"
				>
					<b>{data.followers}</b>
				</Link>{' '}
				followers
			</Text>
			<Spacer x={0.3} />
			&#46;
			<Spacer x={0.3} />
			<Users />
			<Spacer x={0.3} />
			<Text h4>
				<Link
					className={styles['hover-underline-animation']}
					href="https://github.com/Milo123459?tab=following"
				>
					<b>{data.following}</b>
				</Link>{' '}
				following
			</Text>
		</Container>
	);
}
