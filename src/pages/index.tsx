import Container from '../components/Container';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Card from '../components/Card';
import Spacer from '../components/Spacer';

export default function Home() {
	return (
		<Container>
			<Header>Hey, I&apos;m Milo!</Header>
			<br />
			<Paragraph>
				Welcome to my website! I&apos;m a guy who enjoys writing code and
				building things. I primarily use{' '}
				<Link href="https://rust-lang.org">Rust</Link> to build my new projects
				due to its amazing performance and developer experience. If you would
				like to check out my projects, check out{' '}
				<Link href="/projects">my projects page</Link>.
			</Paragraph>
			<Spacer />
			<Card
				data={{
					avatar: '/salvage.webp',
					title: 'Milo123459',
					description: 'being unproductive',
					links: [
						{ text: 'github', href: 'https://github.com/Milo123459' },
						{ text: 'twitter', href: 'https://twitter.com/salvagedev' },
					],
				}}
			/>
		</Container>
	);
}
