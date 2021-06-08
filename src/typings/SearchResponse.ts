export interface PRSearchResponse {
	total_count: number;
	incomplete_results: boolean;
	items: Item[];
}

export interface Item {
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
	state: State;
	locked: boolean;
	assignee: null;
	assignees: any[];
	milestone: null;
	comments: number;
	created_at: string;
	updated_at: string;
	closed_at: null | string;
	author_association: AuthorAssociation;
	active_lock_reason: null;
	draft: boolean;
	pull_request: PullRequest;
	body: string;
	performed_via_github_app: null;
	score: number;
}

export enum AuthorAssociation {
	Contributor = 'CONTRIBUTOR',
	None = 'NONE',
	Owner = 'OWNER',
}

export interface Label {
	id: number;
	node_id: string;
	url: string;
	name: string;
	color: string;
	default: boolean;
	description: null | string;
}

export interface PullRequest {
	url: string;
	html_url: string;
	diff_url: string;
	patch_url: string;
}

export enum State {
	Closed = 'closed',
	Open = 'open',
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

export enum Login {
	Milo123459 = 'Milo123459',
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
