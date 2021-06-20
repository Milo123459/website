import styles from '../../styles/Base.module.css';
import Sidebar from '../../components/Sidebar';
import Code from '../../components/Code';
import GitHubRepo from '../../components/GitHubRepo';

export default function Terminimal() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code>Redefining Terminals.</Code>
					<Code>
						Terminimal is here to prove that performance isn&apos;t a sacrifice
						for UI and UX.
					</Code>
					<Code>
						under the hood, it is written in Rust, and powered by OpenGL
					</Code>
					<Code>
						it works without configuration, but is highly configurable
					</Code>
					<GitHubRepo repo="Milo123459/terminimal" />
				</div>
			</main>
		</div>
	);
}
