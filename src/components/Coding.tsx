import { useLanyard } from 'react-use-lanyard';
import { Text, Spacer, Spinner, Grid } from '@geist-ui/react';

export default function Coding() {
	const { loading, status /*, websocket */ } = useLanyard({
		userId: '450212014912962560',
		socket: true,
	});

	return (
		<Grid.Container justify="center">
			{loading ? (
				<>
					<Text h5>&nbsp;</Text>
					<Spinner />
				</>
			) : (
				<>
					{status.activities.find((v) => v.name === 'Visual Studio Code') ? (
						<>
							<Text p>
								{(function () {
									let rendered = status.activities
										.find((v) => v.name === 'Visual Studio Code')
										.state.replace('📂', '')
										.split(' ');
									return (
										<Text p>
											Currently working on <b>{rendered[0]}</b> in{' '}
											<b>{rendered.at(-1)}</b>
										</Text>
									);
								})()}
							</Text>
							<Spacer />
						</>
					) : (
						<>
							<Text h5>{'Not coding anything'} </Text>
						</>
					)}
				</>
			)}
		</Grid.Container>
	);
}
