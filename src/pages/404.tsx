import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';
import CodeLink from '../components/CodeLink';

export default function Home() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code>
						you seem lost, either get a map, or{' '}
						<CodeLink link="/" noPre={true} colour="pink">
							go home
						</CodeLink>
					</Code>
				</div>
			</main>
		</div>
	);
}
