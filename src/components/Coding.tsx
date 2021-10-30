import { useLanyard } from 'react-use-lanyard';
import { Text, Spinner } from '@geist-ui/react';

export default function Coding() {
	const { loading, status } = useLanyard({
		userId: '450212014912962560',
		socket: true,
	});

	return (
		<>
			{loading ? (
				<>
					<Spinner />
				</>
			) : (
				<>
					{status.activities.find((v) => v.name === 'Visual Studio Code') &&
					(status.activities.find((v) => v.name === 'Visual Studio Code').state
						?.length ||
						false) ? (
						<>
							{(function () {
								const rendered = status.activities
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
						</>
					) : (
						<>
							<Text h5>{'Not coding anything'} </Text>
						</>
					)}
				</>
			)}
		</>
	);
}
