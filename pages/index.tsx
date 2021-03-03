import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { MarkGithubIcon, DeviceCameraIcon } from '@primer/octicons-react';
import Card from '../components/Card';
import Title from '../components/Title';
import Description from '../components/Description';
import ToggleDarkMode from '../components/ToggleDarkMode';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import nFetch from 'node-fetch';

const client = new QueryClient();

interface props {
	theme: {
		bg: string;
		fontColor: string;
	};
}

export default function Home(props: props) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Milo123459</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ToggleDarkMode></ToggleDarkMode>

			<style>{`html {background-color: ${props.theme.bg}`}</style>

			<main
				className={styles.main}
				style={{
					backgroundColor: props.theme.bg,
					color: props.theme.fontColor,
				}}
			>
				<h1 className={styles.title}>Welcome to my personal website.</h1>

				<p className={styles.description}>
					<a href="https://github.com/Milo123459" style={{ paddingRight: 30 }}>
						{' '}
						<MarkGithubIcon size={48} />
					</a>
					<a href="https://youtube.com/SalvageDev">
						<DeviceCameraIcon size={48} />
					</a>
				</p>

				<div className={styles.grid}>
					<Card
						title="About me"
						link="#about-me"
						description="Learn a little bit more about me."
					/>
					<Card
						title="My projects"
						link="#projects"
						description="View some of my recent and **cool** projects."
					/>
					<Card
						title="Recent commits"
						link="#recent-commits"
						description="See some of my recent commits in **awesome** public repositories."
					/>
				</div>
				<Title title="About me" />
				<Description description="Programmer who is always trying to get better. Interested in **Rust** other technologies." />
				<Title title="Projects" />
				<div className={styles.grid}>
					<Card
						title="Glitter"
						link="https://github.com/Milo123459/glitter"
						description="Speed up the way you commit to **Git**."
					/>
					<Card
						title="Website"
						link="https://github.com/Milo123459/website"
						description="My personal website. You're on it right now!"
					/>
				</div>
				<Title title="Recent commits" />
				<div className={styles.grid}>
					<QueryClientProvider client={client}>
						<Commits />
					</QueryClientProvider>
				</div>
			</main>
		</div>
	);
}

function Commits() {
	const { isLoading, error, data } = useQuery(
		'recentCommits',
		async () => {
			const data = await (
				await fetch('https://api.github.com/users/Milo123459/events')
			).json();
			const usable: Array<EventsResponse> = data
				.filter(
					(value: EventsResponse) =>
						value.type == 'PushEvent' && value.public == true
				)
				.slice(0, 3);
			return usable;
		}
	);
	if (isLoading)
		return (
			<Card
				title="Loading.."
				description="Fetching data from the API! Beep boop. Boop beep?"
				link="/"
			/>
		);
	if (error)
		return (
			<Card
				title="An error occurred"
				description={`Beep boop. An error occurred! ${(error as any).message}`}
				link="/"
			/>
		);
	return (
		<>
			{data.map((value: EventsResponse) => {
				return (
					<Card
						title={`Pushed ${value.payload.commits?.length || 1} commit${
							(value.payload.commits?.length || 1) == 1 ? '' : 's'
						}`}
						link={`https://github.com/${value.repo.name}`}
						description={`Pushed in <b>${
							value.repo.name
						}</b> on branch <b><u>${value.payload.ref.slice(11)}</u></b>${value.payload.commits.map((data: Commit) => {
							return `<pre><code><a href="${data.url.replace(
								/api./gi,
								''
							).replace(/\/repos/gi, '')}"><u>${data.message} [${data.sha.substring(
								0,
								7
							)}]</u></a></code></pre>`;
						}).join(`
                    `)}`}
					/>
				);
			})}
		</>
	);
}

export interface EventsResponse {
	id: string;
	type: string;
	actor: Actor;
	repo: Repo;
	payload: Payload;
	public: boolean;
	created_at: string;
	org?: Actor;
}

export interface Actor {
	id: number;
	login: Login;
	display_login?: Login;
	gravatar_id: string;
	url: string;
	avatar_url: string;
}

export enum Login {
	Milo123459 = 'Milo123459',
	Vitejs = 'vitejs',
}

export interface Payload {
	push_id?: number;
	size?: number;
	distinct_size?: number;
	ref?: string | null;
	head?: string;
	before?: string;
	commits?: Commit[];
	action?: string;
	issue?: Issue;
	comment?: Comment;
	ref_type?: string;
	master_branch?: string;
	description?: null;
	pusher_type?: string;
}

export interface Comment {
	url: string;
	html_url: string;
	issue_url: string;
	id: number;
	node_id: string;
	user: User;
	created_at: string;
	updated_at: string;
	author_association: string;
	body: string;
	performed_via_github_app: null;
}

export interface User {
	login: Login;
	id: number;
	node_id: NodeID;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: FollowingURL;
	gists_url: GistsURL;
	starred_url: StarredURL;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: EventsURL;
	received_events_url: string;
	type: Type;
	site_admin: boolean;
}

export enum EventsURL {
	HTTPSAPIGithubCOMUsersMilo123459EventsPrivacy = 'https://api.github.com/users/Milo123459/events{/privacy}',
}

export enum FollowingURL {
	HTTPSAPIGithubCOMUsersMilo123459FollowingOtherUser = 'https://api.github.com/users/Milo123459/following{/other_user}',
}

export enum GistsURL {
	HTTPSAPIGithubCOMUsersMilo123459GistsGistID = 'https://api.github.com/users/Milo123459/gists{/gist_id}',
}

export enum NodeID {
	MDQ6VXNlcjUwMjQ4MTY2 = 'MDQ6VXNlcjUwMjQ4MTY2',
}

export enum StarredURL {
	HTTPSAPIGithubCOMUsersMilo123459StarredOwnerRepo = 'https://api.github.com/users/Milo123459/starred{/owner}{/repo}',
}

export enum Type {
	User = 'User',
}

export interface Commit {
	sha: string;
	author: Author;
	message: string;
	distinct: boolean;
	url: string;
}

export interface Author {
	email: Email;
	name: Name;
}

export enum Email {
	Milo5HuntingtonGmailCOM = 'milo5huntington@gmail.com',
	The50248166Milo123459UsersNoreplyGithubCOM = '50248166+Milo123459@users.noreply.github.com',
}

export enum Name {
	Milo = 'Milo',
	Milo123459 = 'Milo123459',
}

export interface Issue {
	url: string;
	repository_url: string;
	labels_url: string;
	comments_url: string;
	events_url: string;
	html_url: string;
	id: number;
	node_id: string;
	number: number;
	title: string;
	user: User;
	labels: Label[];
	state: string;
	locked: boolean;
	assignee: null;
	assignees: any[];
	milestone: null;
	comments: number;
	created_at: string;
	updated_at: string;
	closed_at: null | string;
	author_association: string;
	active_lock_reason: null;
	body: string;
	performed_via_github_app: null;
	pull_request?: PullRequest;
}

export interface Label {
	id: number;
	node_id: string;
	url: string;
	name: string;
	color: string;
	default: boolean;
	description: string;
}

export interface PullRequest {
	url: string;
	html_url: string;
	diff_url: string;
	patch_url: string;
}

export interface Repo {
	id: number;
	name: string;
	url: string;
}
