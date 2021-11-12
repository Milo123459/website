export interface Project {
	name: string;
	link: string;
	description: string;
	repo: string;
}

export const projects: Project[] = [
	{
		name: 'Glitter',
		link: 'https://github.com/Milo123459/glitter',
		description: 'A simple, yet powerful way of templating commit messages',
		repo: 'Milo123459/glitter',
	},
	{
		name: 'GreenwichDB',
		link: 'https://github.com/GreenwichDB/GreenwichDB',
		description:
			"Go back to the start of time, where DataStores weren't complex. (Roblox)",
		repo: 'GreenwichDB/GreenwichDB',
	},
	{
		name: 'with_lock',
		link: 'https://github.com/Milo123459/with_lock',
		description: 'Prevent deadlocks in Rust',
		repo: 'Milo123459/with_lock',
	},
];
