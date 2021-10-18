import { Text, Grid, Spacer } from '@geist-ui/react';
import { Twitter, Youtube, Github } from '@geist-ui/react-icons';
import OpenSourceProjects from '../components/OpenSourceProjects';
import Spotify from '../components/Spotify';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Text h1>Hey! I&apos;m Milo</Text>
			<Text p>I like to program things</Text>
			<Grid.Container>
				<OpenSourceProjects />
			</Grid.Container>
			<footer>
				<Spacer />
				<Grid.Container>
					<Grid>
						<Link href="https://twitter.com/salvagedev">
							<Twitter />
						</Link>
					</Grid>
					<Spacer />
					<Grid>
						<Link href="https://youtube.com/salvagedev">
							<Youtube />
						</Link>
					</Grid>
					<Spacer />
					<Grid>
						<Link href="https://github.com/Milo123459">
							<Github />
						</Link>
					</Grid>
					<Spacer />
				</Grid.Container>
				<Spotify />
			</footer>
		</>
	);
}
