import Container from '../components/Container';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Spacer from '../components/Spacer';

export default function Home() {
	return (
		<Container>
			<Header>Milo&apos;s website</Header>
			<Spacer />
			<Paragraph>
				Welcome to my website. I enjoy writing{' '}
				<Link href="https://rust-lang.org">Rust</Link> and refining tools.
			</Paragraph>
			<Spacer />
			<Paragraph>
				If you are interested in my projects, consider checking out my{' '}
				<Link href="https://github.com/Milo123459">GitHub</Link>. I post almost
				all of my open source work there. If you are interested in my open
				source experience, take a look <Link href="/experience">here</Link>.
			</Paragraph>
		</Container>
	);
}
