import Container from '../components/Container';
import Header from '../components/Header';
import Link from '../components/Link';
import Paragraph from '../components/Paragraph';
import Card from '../components/Card';
import Spacer from '../components/Spacer';
import { Fragment } from 'react';

const projects: {
	title: string;
	description: string;
	links: { text: string; href: string }[];
	avatar: string;
}[] = [
	{
		title: 'Glitter',
		description: 'Git tooling of the future.',
		links: [
			{
				text: 'github',
				href: 'https://github.com/Milo123459/glitter',
			},
			{
				text: 'dev.to',
				href: 'https://dev.to/milo123459/introducing-glitter-4505',
			},
		],
		avatar: '/glitter.png',
	},
	{
		title: 'Chrono',
		description: 'Rust & datetime library for Rust.',
		links: [
			{
				text: 'github',
				href: 'https://github.com/chronotope/chrono',
			},
			{
				text: 'crates.io',
				href: 'https://crates.io/crates/chrono',
			},
		],
		avatar: '/chrono.jfif',
	},
	{
		title: 'Observer',
		description: 'Simple Discord bot to give you your Hypixel statistics.',
		links: [
			{
				text: 'discord server',
				href: 'https://discord.gg/5RwVUcJYkp',
			},
			{
				text: 'invite',
				href: 'https://discord.com/oauth2/authorize?client_id=813718772908163082&permissions=388168&scope=applications.commands%20bot',
			},
		],
		avatar: '/observer.png',
	},
];

export default function Projects() {
	return (
		<Container>
			<Header>Projects</Header>
			<Paragraph>
				I have authored various projects including{' '}
				<Link href="https://github.com/Milo123459/glitter">Glitter</Link>: my
				biggest open source project to date. I enjoy working on OSS libraries,
				but I also like to expand my work and work on things like{' '}
				<Link href="https://top.gg/bot/850045648639098901">SushiBot</Link> - a
				Discord bot about cooking sushi!
			</Paragraph>
			<Spacer />
			{projects.map((project, index) => {
				const should_render_spacer = index !== projects.length - 1;
				return (
					<Fragment key={project.title}>
						<Card
							data={{
								avatar: project.avatar,
								title: project.title,
								description: project.description,
								links: project.links,
							}}
						/>
						{should_render_spacer ? <Spacer /> : null}
					</Fragment>
				);
			})}
		</Container>
	);
}
