import styles from '../styles/Components.module.css';

interface props {
	link: string;
	text: string;
}

export default function CodeLink(props: props) {
	return (
		<pre>
			<a className={styles.codelink} href={props.link}>
				<code>{props.text}</code>
			</a>
		</pre>
	);
}
