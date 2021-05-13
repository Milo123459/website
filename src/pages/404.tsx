import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';

export default function Home() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '80%' }}>
					<Code>this isn't a valid page, go home</Code>
				</div>
			</main>
		</div>
	);
}
