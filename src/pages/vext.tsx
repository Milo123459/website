import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';
import CodeLink from '../components/CodeLink';
import GitHubRepo from '../components/GitHubRepo';

export default function Vext() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code>🤙 Vext is a code editor that lives in the Terminal.</Code>
					<Code>
						The way Vext works is the fact it is written in{' '}
						<CodeLink noPre={true} colour="#5d87bf" link="https://vlang.io">
							V
						</CodeLink>{' '}
						and is natrually memory efficient and fast.
					</Code>
					<Code>
						I built Vext to solve some problems with code editors. Mostly being,
						they aren't lightweight.
					</Code>
					<Code>
						Vext proves, that being lightweight doesn't have to be a sacrifice
						for UX.
					</Code>
					<Code>i hope to have it finished by the end of summer 2021</Code>

					<GitHubRepo repo="Milo123459/vext" />
				</div>
			</main>
		</div>
	);
}
