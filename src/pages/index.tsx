import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';

export default function Home() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code>hi</Code>
					<Code>i love writing code</Code>
					<Code>i do it too much</Code>
					<Code>i seriously need help</Code>
					<Code>thanks for visiting</Code>
				</div>
			</main>
		</div>
	);
}
