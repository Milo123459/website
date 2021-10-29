import { Link, Heading, Center, Container } from '@chakra-ui/react';
import Layout from '../components/layouts/Article';

const ProjectItem = ({ name, href, description }) => {
	return (
		<>
			<Link href={href}>{name}</Link> - {description}
		</>
	);
};

export default function Projects() {
	return (
		<Layout title="Projects">
			<Center>
				<Heading as="h3" variant="section-title">
					Projects
				</Heading>
			</Center>
			<Container justify="center">
				<ProjectItem
					name="Glitter"
					href="https://github.com/Milo123459/glitter"
					description="A simple, yet powerful way of templating commit messages"
				/>{' '}
				<br />
				<ProjectItem
					name="GreenwichDB"
					href="https://github.com/GreenwichDB/GreenwichDB"
					description="Go back to the start of time, where DataStores weren't complex. (Roblox)"
				/>
			</Container>
		</Layout>
	);
}
