import { Spinner, Text, Container, Avatar, Center } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { useLanyard } from 'react-use-lanyard';
import Paragraph from './paragraph';

export default function NowPlaying() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: '450212014912962560',
		socket: true,
	});
	return (
		<Container justify="center">
			{loading ? (
				<>
					<Text h5>&nbsp;</Text>
					<Spinner />
				</>
			) : (
				<>
					{status.spotify ? (
						<>
							<Center>
							<Paragraph>{'Listening to -'} &nbsp;</Paragraph>
							<Link
								passHref
								href={`https://open.spotify.com/track/${
									status.spotify!.track_id
								}`}
							>
								<Avatar src={status.spotify!.album_art_url} size="xs"/>
							</Link>
							&nbsp;
							<Paragraph>
								{status.spotify!.song} -{' '}
								{status.spotify!.artist.replaceAll(';', ',')}
							</Paragraph>
							</Center>
						</>
					) : (
						<>
							<Text as="h5">{'Not playing anything'} </Text>
						</>
					)}
				</>
			)}
		</Container>
	);
}