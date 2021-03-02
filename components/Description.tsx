import styles from '../styles/main.module.css';
import { Remarkable } from 'remarkable';

const md = new Remarkable({
	html: true,
	xhtmlOut: true,
});

interface props {
	description: string;
}

export default function Title(props: props) {
	return (
		<p
			className={styles.description}
			dangerouslySetInnerHTML={{ __html: md.render(props.description) }}
		></p>
	);
}
