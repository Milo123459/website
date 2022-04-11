import Container from '../components/Container';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Card from '../components/Card';
import Spacer from '../components/Spacer';
import { useLanyard } from 'react-use-lanyard';

export default function Home() {
	const { loading, status } = useLanyard({
		socket: true,
		userId: '450212014912962560',
	});

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
				<Link href="/projects">my projects page</Link>. Thanks for visiting!
			</Paragraph>
			<Spacer />
			<Card
				avatar={'/salvage.png'}
				title={'Milo123459'}
				description={'being unproductive'}
				links={[
					{ text: 'github', href: 'https://github.com/Milo123459' },
					{ text: 'twitter', href: 'https://twitter.com/salvagedev' },
				]}
				statusText={
					<>
						<div className="max-w-[280px] rounded text-left">
							{loading ? (
								'Loading..'
							) : (
								<>
									Listening to{' '}
									{status.spotify ? (
										<>
											<b>{status.spotify.song}</b> on{' '}
											<b>{status.spotify.album}</b> by{' '}
											<b>{status.spotify.artist}</b>
										</>
									) : (
										'nothing'
									)}
								</>
							)}
						</div>
					</>
				}
			/>
		</Container>
	);
}
