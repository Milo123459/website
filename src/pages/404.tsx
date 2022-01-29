import Container from '../components/Container';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Paragraph from '../components/Paragraph';
import Bold from '../components/Bold';
import Link from '../components/Link';

export default function NotFound() {
	const router = useRouter();

	return (
		<Container>
			<Header>404 - Page not found</Header>
			<Paragraph>
				The requested page <Bold>{router.asPath}</Bold> couldn&apos; be found.{' '}
				<Link href="/">Go home?</Link>
			</Paragraph>
		</Container>
	);
}
