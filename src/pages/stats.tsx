import React from 'react';
import {
	Text,
	Link,
	Spacer,
	Container,
	Loading,
	Progress,
} from '@geist-ui/react';
import styles from '../styles/Components.module.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { UserInformation } from '../typings/UserResponse';
import { LanguagesResponse } from '../typings/WakatimeResponse';
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
				<GitHubStats />
			</QueryClientProvider>
			<Spacer />
			<Text h1 b>
				WakaTime stats
			</Text>
			<QueryClientProvider client={queryClient}>
				<WakatimeStats />
			</QueryClientProvider>
		</>
	);
}

function GitHubStats() {
	const { isLoading, error, data } = useQuery('githubstats', async () => {
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

function WakatimeStats() {
	const { isLoading, error, data } = useQuery('wakatimestats', async () => {
		const data = await (
			await fetch(
				'https://wakatime.com/share/@salvage_dev/ba2cd6a0-51c4-4f64-8856-6a2f4dfcf18c.json'
			)
		).json();
		return data as LanguagesResponse;
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
		<div>
			{data.data.map((value, index) => (
				<Progress key={index} value={value.percent} color={value.color}>
					{value.name}
				</Progress>
			))}
		</div>
	);
}
