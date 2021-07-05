import React from 'react';
import { Text, Spacer } from '@geist-ui/react';

export default function Notes() {
	return (
		<>
			<Spacer />
			<Text h1 b>
				Notes
			</Text>
			<Text p>
				Introducing <b>Notes</b>
			</Text>
			<Text p>
				<b>Notes</b> is an in-browser note taking app, with the power to sync
				with a GitHub repo.
			</Text>
			<Text p b>
				Coming soon.
			</Text>
		</>
	);
}
