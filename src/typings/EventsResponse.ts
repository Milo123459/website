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
	DependabotBot = 'dependabot[bot]',
	DiscordDatamining = 'Discord-Datamining',
	Kidonng = 'kidonng',
	Milo123459 = 'Milo123459',
	ScoopInstaller = 'ScoopInstaller',
	Starship = 'starship',
}

export interface Payload {
	push_id?: number;
	size?: number;
	distinct_size?: number;
	ref?: null | string;
	head?: string;
	before?: string;
	commits?: Commit[];
	ref_type?: string;
	pusher_type?: string;
	action?: string;
	number?: number;
	pull_request?: PayloadPullRequest;
	master_branch?: Branch;
	description?: string;
	comment?: Comment;
	issue?: Issue;
	forkee?: Forkee;
}

export interface Comment {
	url: string;
	html_url: string;
	id: number;
	node_id: string;
	user: User;
	position?: null;
	line?: null;
	path?: null;
	commit_id?: string;
	created_at: string;
	updated_at: string;
	author_association: string;
	body: string;
	issue_url?: string;
	performed_via_github_app?: null;
}

export interface User {
	login: Login;
	id: number;
	node_id: UserNodeID;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: GistsURL;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: Type;
	site_admin: boolean;
}

export enum GistsURL {
	HTTPSAPIGithubCOMUsersDependabot5Bbot5DGistsGistID = 'https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}',
	HTTPSAPIGithubCOMUsersKidonngGistsGistID = 'https://api.github.com/users/kidonng/gists{/gist_id}',
	HTTPSAPIGithubCOMUsersMilo123459GistsGistID = 'https://api.github.com/users/Milo123459/gists{/gist_id}',
	HTTPSAPIGithubCOMUsersScoopInstallerGistsGistID = 'https://api.github.com/users/ScoopInstaller/gists{/gist_id}',
	HTTPSAPIGithubCOMUsersStarshipGistsGistID = 'https://api.github.com/users/starship/gists{/gist_id}',
}

export enum UserNodeID {
	MDEyOk9YZ2FuaXphdGlvbjE2NjE4MDY4 = 'MDEyOk9yZ2FuaXphdGlvbjE2NjE4MDY4',
	MDEyOk9YZ2FuaXphdGlvbjQ5NjU0ODcw = 'MDEyOk9yZ2FuaXphdGlvbjQ5NjU0ODcw',
	MDM6Qm90NDk2OTkzMzM = 'MDM6Qm90NDk2OTkzMzM=',
	MDQ6VXNlcjQ0MDQ1OTEx = 'MDQ6VXNlcjQ0MDQ1OTEx',
	MDQ6VXNlcjUwMjQ4MTY2 = 'MDQ6VXNlcjUwMjQ4MTY2',
}

export enum Type {
	Bot = 'Bot',
	Organization = 'Organization',
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
	name: AuthorName;
}

export enum Email {
	The49699333DependabotBotUsersNoreplyGithubCOM = '49699333+dependabot[bot]@users.noreply.github.com',
	The50248166Milo123459UsersNoreplyGithubCOM = '50248166+Milo123459@users.noreply.github.com',
}

export enum AuthorName {
	DependabotBot = 'dependabot[bot]',
	Milo = 'Milo',
}

export interface Forkee {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: User;
	html_url: string;
	description: null | string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: string;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: null | string;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	forks_count: number;
	mirror_url: null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: License | null;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: Branch;
	public?: boolean;
}

export enum Branch {
	Master = 'master',
}

export interface License {
	key: Key;
	name: LicenseName;
	spdx_id: SpdxID;
	url: string;
	node_id: LicenseNodeID;
}

export enum Key {
	ISC = 'isc',
	MIT = 'mit',
	Unlicense = 'unlicense',
}

export enum LicenseName {
	ISCLicense = 'ISC License',
	MITLicense = 'MIT License',
	TheUnlicense = 'The Unlicense',
}

export enum LicenseNodeID {
	MDc6TGljZW5ZZTE1 = 'MDc6TGljZW5zZTE1',
	MDc6TGljZW5ZZTEw = 'MDc6TGljZW5zZTEw',
	MDc6TGljZW5ZZTEz = 'MDc6TGljZW5zZTEz',
}

export enum SpdxID {
	ISC = 'ISC',
	MIT = 'MIT',
	Unlicense = 'Unlicense',
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
	pull_request?: IssuePullRequest;
	body: string;
	performed_via_github_app: null;
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

export interface IssuePullRequest {
	url: string;
	html_url: string;
	diff_url: string;
	patch_url: string;
}

export interface PayloadPullRequest {
	url: string;
	id: number;
	node_id: string;
	html_url: string;
	diff_url: string;
	patch_url: string;
	issue_url: string;
	number: number;
	state: string;
	locked: boolean;
	title: string;
	user: User;
	body: string;
	created_at: string;
	updated_at: string;
	closed_at: null | string;
	merged_at: null | string;
	merge_commit_sha: null | string;
	assignee: null;
	assignees: any[];
	requested_reviewers: any[];
	requested_teams: any[];
	labels: Label[];
	milestone: null;
	draft: boolean;
	commits_url: string;
	review_comments_url: string;
	review_comment_url: string;
	comments_url: string;
	statuses_url: string;
	head: Base;
	base: Base;
	_links: Links;
	author_association: string;
	auto_merge: null;
	active_lock_reason: null;
	merged: boolean;
	mergeable: boolean | null;
	rebaseable: boolean | null;
	mergeable_state: string;
	merged_by: User | null;
	comments: number;
	review_comments: number;
	maintainer_can_modify: boolean;
	commits: number;
	additions: number;
	deletions: number;
	changed_files: number;
}

export interface Links {
	self: Comments;
	html: Comments;
	issue: Comments;
	comments: Comments;
	review_comments: Comments;
	review_comment: Comments;
	commits: Comments;
	statuses: Comments;
}

export interface Comments {
	href: string;
}

export interface Base {
	label: string;
	ref: string;
	sha: string;
	user: User;
	repo: Forkee;
}

export interface Repo {
	id: number;
	name: string;
	url: string;
}
