import { Spinner, Text, Grid, Spacer } from '@geist-ui/react';
import { Music } from '@geist-ui/react-icons';
import Link from 'next/link';
import { useLanyard } from 'react-use-lanyard';

export default function NowPlaying() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: '450212014912962560',
		socket: true,
	});

	return (
		<Grid.Container>
			{loading ? (
				<Spinner />
			) : (
				<>
					{status.spotify ? (
						<>
							<Link
								href={`https://open.spotify.com/track/${
									status.spotify!.track_id
								}`}
							>
								<Music />
							</Link>
							<Spacer />
							<Text h5>
								{status.spotify!.song} -{' '}
								{status.spotify!.artist.replaceAll(';', ',')}
							</Text>
						</>
					) : (
						<>
							<Music />
							<Spacer />
							<Text h5>Nothing</Text>
						</>
					)}
				</>
			)}
		</Grid.Container>
	);
}
