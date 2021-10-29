import { useLanyard } from 'react-use-lanyard';
import { Text, Spinner, Container } from '@chakra-ui/react';
import React from 'react';
import Paragraph from './paragraph';

export default function Coding() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: '450212014912962560',
		socket: true,
	});

	return (
		<Container justify="center">
			{loading ? (
				<>
					<Paragraph>&nbsp;</Paragraph>
					<Spinner />
				</>
			) : (
				<>
					{status.activities.find((v) => v.name === 'Visual Studio Code') &&
					(status.activities.find((v) => v.name === 'Visual Studio Code').state
						?.length ||
						false) ? (
						<>
							<Text as="p">
								{(function () {
									const rendered = status.activities
										.find((v) => v.name === 'Visual Studio Code')
										.state.replace('📂', '')
										.split(' ');
									return (
										<Text as="p">
											Currently working on <b>{rendered[0]}</b> in{' '}
											<b>{rendered.at(-1)}</b>
										</Text>
									);
								})()}
							</Text>
							&nbsp;
						</>
					) : (
						<>
							<Paragraph>{'Not coding anything'} </Paragraph>
						</>
					)}
				</>
			)}
		</Container>
	);
}