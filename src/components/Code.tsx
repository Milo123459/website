import styles from '../styles/Components.module.css';

interface props {
	children: string;
}

export default function Code(props: props) {
	return (
		<pre>
			<code>{props.children}</code>
		</pre>
	);
}
