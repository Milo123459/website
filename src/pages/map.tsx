import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';

export default function Map() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code>
						i'm a map
						<Code>respect maps please</Code>
					</Code>
				</div>
			</main>
		</div>
	);
}
