import { ReactNode } from 'react';
interface Props {
	children: ReactNode;
	noPre?: boolean;
}

export default function Code(props: Props) {
	if (props.noPre) {
		return <code>{props.children}</code>;
	} else {
		return (
			<pre>
				<code>{props.children}</code>
			</pre>
		);
	}
}
