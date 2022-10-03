import Container from '../components/Container';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Spacer from '../components/Spacer';

export default function Home() {
	return (
		<Container>
			<Header>Interests</Header>
			<Spacer />
			<Paragraph>
				I am interested in numerous pieces of tech, including{' '}
				<Link href="https://rust-lang.org">Rust</Link>,{' '}
				<Link href="https://www.typescriptlang.org/">TypeScript</Link> and more
				recently, <Link href="https://bun.sh">Bun</Link>.
			</Paragraph>
			<Spacer />
			<Paragraph>
				I have found a new love for performant pieces of tech.{' '}
				<Link href="https://bun.sh">Bun</Link> has been something I have been
				very interested in recently, due to its possibility to change the entire
				JavaScript ecosystem.
			</Paragraph>
		</Container>
	);
}
