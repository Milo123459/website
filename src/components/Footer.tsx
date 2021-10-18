import { Grid, Spacer } from '@geist-ui/react';
import { Twitter, Youtube, Github } from '@geist-ui/react-icons';
import Spotify from '../components/Spotify';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer>
			<Spacer />
			<Grid.Container justify="center">
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
			<br />
			<Spotify />
		</footer>
	);
}
