import { Link, Heading, Center, Container, Text } from '@chakra-ui/react';
import Layout from '../components/layouts/Article';

const WorkItem = ({
	position,
	href,
	company,
}: {
	position: string;
	href: string;
	company: string;
}) => {
	return (
		<Center>
			<Text>
				<code>{position}</code> @ <Link href={href}>{company}</Link>
			</Text>
		</Center>
	);
};

export default function Work() {
	return (
		<Layout title="Where">
			<Center>
				<Heading as="h3" variant="section-title">
					Where I do things
				</Heading>
			</Center>
			<Container justify="center">
				<WorkItem position="Helper" href="railway.app" company="Railway" />
				<WorkItem
					position="Lead developer"
					href="https://discord.com/invite/HkFGjvVeqq"
					company="Observer"
				/>
				<WorkItem
					position="Lead developer"
					href="https://github.com/Milo123459/glitter"
					company="Glitter"
				/>
				<WorkItem
					position="Maintainer"
					href="https://github.com/chronotope/chrono"
					company="Chrono"
				/>
				<WorkItem position="Contributor" href="https://fig.sh/" company="Fig" />
				<WorkItem
					position="Contributor"
					href="https://github.com/starship/starship"
					company="Starship"
				/>
			</Container>
		</Layout>
	);
}
