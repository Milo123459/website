import styles from '../styles/Components.module.css';
import Code from './Code';

interface props {
	link: string;
	text: string;
}

export default function CodeLink(props: props) {
	return (
		<pre>
			<a className={styles.codelink} href={props.link}>
				<Code>{props.text}</Code>
			</a>
		</pre>
	);
}
