import styles from '../styles/Home.module.css';
import { Remarkable } from 'remarkable';

const md = new Remarkable({
	html: true,
	xhtmlOut: true,
});

interface props {
	title: string;
	description: string;
	link: string;
}

export default function Card(props: props) {
	return (
		<a href={props.link} className={styles.card}>
			<h3>{props.title} &rarr;</h3>
			<p dangerouslySetInnerHTML={{ __html: md.render(props.description) }}></p>
		</a>
	);
}
