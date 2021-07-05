export interface GistsInformation {
	url: string;
	forks_url: string;
	commits_url: string;
	id: string;
	node_id: string;
	git_pull_url: string;
	git_push_url: string;
	html_url: string;
	files: { [key: string]: File };
	public: boolean;
	created_at: string;
	updated_at: string;
	description: string;
	comments: number;
	user: null;
	comments_url: string;
	owner: Owner;
	truncated: boolean;
}

export interface File {
	filename: string;
	type: FileType;
	language: null | string;
	raw_url: string;
	size: number;
}

export enum FileType {
	ApplicationRlsServicesXML = 'application/rls-services+xml',
	TextMarkdown = 'text/markdown',
	TextPlain = 'text/plain',
}

export interface Owner {
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
	type: OwnerType;
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

export enum OwnerType {
	User = 'User',
}
