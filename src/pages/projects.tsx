import Container from '../components/Container';
import Header from '../components/Header';
import Link from '../components/Link';
import Paragraph from '../components/Paragraph';

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
		</Container>
	);
}
