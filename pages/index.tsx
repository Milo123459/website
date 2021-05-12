import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';

export default function Home() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
                <pre>
                    <code>hi</code>
                </pre>
            </main>
		</div>
	);
}
