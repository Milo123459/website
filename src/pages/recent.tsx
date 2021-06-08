import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';
import CodeLink from '../components/CodeLink';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { EventsResponse } from '../typings/EventsResponse';
import { Item } from '../typings/SearchResponse';
const client = new QueryClient();

export default function Recent() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code>recent commits</Code>
					<QueryClientProvider client={client}>
						<Commits />
					</QueryClientProvider>
					<Code>recent merged prs</Code>
					<QueryClientProvider client={client}>
						<PRs />
					</QueryClientProvider>
					<Code>recent issues</Code>
					<QueryClientProvider client={client}>
						<Issues />
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
					commit{' '}
					<CodeLink
						link={value.payload.commits[0].url
							.replace(/api./i, '')
							.replace(/\/repos/gi, '')
							.replace(/commits/gi, 'commit')}
						noPre={true}
						colour="pink"
					>
						{value.payload.commits[0].sha.substring(0, 7)} (
						<b>{value.payload.commits[0].message.split('\n')[0]}</b>)
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

function PRs() {
	const { isLoading, error, data } = useQuery('recentPRs', async () => {
		const data = await (
			await fetch(
				'https://api.github.com/search/issues?q=is:pr%20author:Milo123459%20archived:false%20is:merged'
			)
		).json();
		const usable: Array<Item> = data.items.slice(0, 5);
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
					pr{' '}
					<CodeLink link={value.html_url} noPre={true} colour="pink">
						#{value.number} (<b>{value.title.trim()}</b>)
					</CodeLink>{' '}
					in{' '}
					<CodeLink
						link={`${value.repository_url
							.replace('api.', '')
							.replace('/repos', '')}`}
						noPre={true}
						colour="pink"
					>
						{value.repository_url.slice(29)}
					</CodeLink>
				</Code>
			))}
		</>
	);
}

function Issues() {
	const { isLoading, error, data } = useQuery('recentIssues', async () => {
		const data = await (
			await fetch(
				'https://api.github.com/search/issues?q=is:issue%20author:Milo123459%20archived:false%20'
			)
		).json();
		const usable: Array<Item> = data.items.slice(0, 5);
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
					issue{' '}
					<CodeLink link={value.html_url} noPre={true} colour="pink">
						#{value.number} (<b>{value.title.trim()}</b>)
					</CodeLink>{' '}
					in{' '}
					<CodeLink
						link={`${value.repository_url
							.replace('api.', '')
							.replace('/repos', '')}`}
						noPre={true}
						colour="pink"
					>
						{value.repository_url.slice(29)}
					</CodeLink>
					<Code noPre={true}>&nbsp;|</Code>
					&nbsp;
					{value.state == 'open' ? (
						<Code noPre={true} colour="#56d364">
							open
						</Code>
					) : (
						<Code noPre={true} colour="#e24b44">
							closed
						</Code>
					)}
				</Code>
			))}
		</>
	);
}
