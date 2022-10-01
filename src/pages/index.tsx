import Container from '../components/Container';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';

export default function Home() {
	return (
		<Container>
			<Header>Hey, I&apos;m Milo!</Header>
			<br />
			<Paragraph>
				Welcome to my website! I&apos;m a guy who enjoys writing code and
				building things. I primarily use{' '}
				<Link href="https://rust-lang.org">Rust</Link> to build my new projects
				due to its amazing performance and developer experience.
			</Paragraph>
		</Container>
	);
}
