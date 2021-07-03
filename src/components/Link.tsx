import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	colour?: string;
	link: string;
}

export default function Link(props: Props) {
	return (
		<a
			style={{ color: props.colour || '#f2ebeb', textAlign: 'center' }}
			href={props.link}
		>
			{props.children}
		</a>
	);
}
