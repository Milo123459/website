import { ReactNode } from 'react';
import styles from '../styles/Components.module.css';
import Code from './Code';

interface Props {
	link: string;
	children: ReactNode;
	noPre?: boolean;
	colour?: string;
}

export default function CodeLink(props: Props) {
	if (props.noPre) {
		return (
			<a
				className={styles.codelink}
				href={props.link}
				style={{ color: props.colour || '' }}
			>
				<Code noPre={true}>{props.children}</Code>
			</a>
		);
	} else {
		return (
			<pre>
				<a
					className={styles.codelink}
					href={props.link}
					style={{ color: props.colour || '' }}
				>
					<Code>{props.children}</Code>
				</a>
			</pre>
		);
	}
}
