import { ReactNode } from 'react';
interface Props {
	children: ReactNode;
	noPre?: boolean;
	colour?: string;
	background?: string;
}

export default function Code(props: Props) {
	if (props.noPre) {
		return (
			<code
				style={{
					color: props.colour || '',
					backgroundColor: props.background || '',
				}}
			>
				{props.children}
			</code>
		);
	} else {
		return (
			<pre>
				<code
					style={{
						color: props.colour || '',
						backgroundColor: props.background || '',
					}}
				>
					{props.children}
				</code>
			</pre>
		);
	}
}
