import styles from '../styles/Components.module.css';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	colour?: string;
}

export default function Title(props: Props) {
	return (
		<h1
			className={styles.title}
			style={{ color: props.colour || '#f2ebeb', textAlign: 'center' }}
		>
			{props.children}
		</h1>
	);
}
