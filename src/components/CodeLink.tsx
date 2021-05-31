import { ReactNode } from 'react';
import styles from '../styles/Components.module.css';
import Code from './Code';

interface Props {
	link: string;
	children: ReactNode;
	noPre?: boolean;
	colour?: string;
	background?: string;
}

export default function CodeLink(props: Props) {
	if (props.noPre) {
		return (
			<a className={styles.codelink} href={props.link}>
				<Code colour={props.colour} background={props.background} noPre={true}>
					{props.children}
				</Code>
			</a>
		);
	} else {
		return (
			<pre>
				<a className={styles.codelink} href={props.link}>
					<Code colour={props.colour} background={props.background}>
						{props.children}
					</Code>
				</a>
			</pre>
		);
	}
}
