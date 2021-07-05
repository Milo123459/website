import React from 'react';
import { Text, Link, Spacer, Container, Loading } from '@geist-ui/react';
import styles from '../styles/Components.module.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { UserInformation } from '../typings/UserResponse';
import { Users } from '@geist-ui/react-icons';

const queryClient = new QueryClient();

export default function Home() {
	return (
		<>
			<Spacer />
			<Text h1 b>
				GitHub stats
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
