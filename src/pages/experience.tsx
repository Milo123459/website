import Container from '../components/Container';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Spacer from '../components/Spacer';

export default function Home() {
	return (
		<Container>
			<Header>OS experience</Header>
			<Spacer />
			<Paragraph>
				I have contributed to various open source projects in the 2 years I have
				been doing programming. Most recently, I have been working on{' '}
				<Link href="https://github.com/railwayapp/nixpacks">nixpacks</Link> as a
				core contributor.
			</Paragraph>
			<Spacer />
			<Paragraph>
				I have also authored various projects, including my most used package:{' '}
				<Link href="https://github.com/Milo123459/glitter">glitter</Link>.
			</Paragraph>
		</Container>
	);
}
