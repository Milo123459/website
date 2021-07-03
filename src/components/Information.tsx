import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	colour?: string;
}

export default function Information(props: Props) {
	return (
		<h2 style={{ color: props.colour || '#f2ebeb', textAlign: 'center' }}>
			{props.children}
		</h2>
	);
}
