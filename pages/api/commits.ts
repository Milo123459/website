import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data: Array<EventsResponse> = await (
		await fetch('https://api.github.com/users/Milo123459/events')
	).json();
	const usable = data
		.filter((value: EventsResponse) => value.type == 'PushEvent')
		.slice(0, 3);
	console.log(usable);
	res.status(200).json(usable);
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
	ref?: MasterBranch | null;
	head?: string;
	before?: string;
	commits?: Commit[];
	action?: string;
	issue?: Issue;
	comment?: Comment;
	ref_type?: string;
	master_branch?: MasterBranch;
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

export enum MasterBranch {
	DependabotAddV2ConfigFile = 'dependabot/add-v2-config-file',
	Master = 'master',
	RefsHeadsMaster = 'refs/heads/master',
	RefsHeadsTwitterDates = 'refs/heads/twitter-dates',
}

export interface Repo {
	id: number;
	name: string;
	url: string;
}
