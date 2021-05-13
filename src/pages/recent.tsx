import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';
import CodeLink from '../components/CodeLink';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { EventsResponse } from '../typings/EventsResponse';

const client = new QueryClient();

export default function Recent() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '30%' }}>
					<Code>recent commits</Code>
					<QueryClientProvider client={client}>
						<Commits />
					</QueryClientProvider>
				</div>
			</main>
		</div>
	);
}

function Commits() {
	const { isLoading, error, data } = useQuery('recentCommits', async () => {
		const data = await (
			await fetch('https://api.github.com/users/Milo123459/events')
		).json();
		const usable: Array<EventsResponse> = data
			.filter(
				(value: EventsResponse) =>
					value.type == 'PushEvent' && value.public == true
			)
			.slice(0, 5);
		return usable;
	});

	if (isLoading) {
		return <Code>give me a minute im loading stuff</Code>;
	}
	if (error) {
		return <Code>i errored {(error as { message: string }).message} </Code>;
	}
	return (
		<>
			{data.map((value) => (
				<Code>
					pushed commit{' '}
					<CodeLink
						link={value.payload.commits[0].url
							.replace(/api./i, '')
							.replace(/\/repos/gi, '')
							.replace(/commits/gi, 'commit')}
						noPre={true}
						colour="pink"
					>
						{value.payload.commits[0].sha.substring(0, 7)} (
						{value.payload.commits[0].message.split('\n')[0]})
					</CodeLink>{' '}
					in{' '}
					<CodeLink
						link={`https://github.com/${value.repo.name}`}
						noPre={true}
						colour="pink"
					>
						{value.repo.name}
					</CodeLink>
				</Code>
			))}
		</>
	);
}
