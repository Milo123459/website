import { Spinner, Text, Grid, Spacer, Avatar } from '@geist-ui/react';
import Link from 'next/link';
import { useLanyard } from 'react-use-lanyard';

export default function NowPlaying() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: '450212014912962560',
		socket: true,
	});
	return (
		<Grid.Container justify="center">
			{loading ? (
				<>
					<Text h5>Listening to -</Text>
					<Spinner />
				</>
			) : (
				<>
					{status.spotify ? (
						<>
							<Text h5>{'Listening to -'} &nbsp;</Text>
							<Link
								passHref
								href={`https://open.spotify.com/track/${
									status.spotify!.track_id
								}`}
							>
								<Avatar src={status.spotify!.album_art_url} />
							</Link>
							<Spacer />
							<Text h5>
								{status.spotify!.song} -{' '}
								{status.spotify!.artist.replaceAll(';', ',')}
							</Text>
						</>
					) : (
						<>
							<Text h5>{'Not playing anything'} </Text>
						</>
					)}
				</>
			)}
		</Grid.Container>
	);
}
