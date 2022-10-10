import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
	runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
	const { searchParams } = new URL(req.url);

	// ?title=<title>
	const hasTitle = searchParams.has('lower');
	const title = hasTitle
		? searchParams.get('lower')?.slice(0, 100)
		: 'hamburger';

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
				<div style={{ marginTop: 40 }}>{title}</div>
			</div>
		)
	);
}
