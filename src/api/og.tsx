// /pages/api/og.tsx

import { ImageResponse } from '@vercel/og';

export const config = {
	runtime: 'experimental-edge',
};

export default function handler() {
	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#fff',
					fontSize: 32,
					fontWeight: 600,
				}}
			>
				<div style={{ marginTop: 40 }}>milo.solar</div>
			</div>
		)
	);
}
