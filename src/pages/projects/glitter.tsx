import styles from '../../styles/Base.module.css';
import Sidebar from '../../components/Sidebar';
import Code from '../../components/Code';
import GitHubRepo from '../../components/GitHubRepo';

export default function Glitter() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code>🌌⭐ Git tooling of the future.</Code>
					<Code>glitter simplifies commiting code to a hosted repo.</Code>
					<Code>
						under the hood, glitter runs the following git commands: add,
						commit, pull, push
					</Code>
					<Code>if you'd like, you can run git fetch as well</Code>
					<Code>
						it works without configuration, allowing you to commit to any repo
						without special config
					</Code>
					<Code>
						however, you can specify special config allowing you to template out
						commit messages
					</Code>
					<GitHubRepo repo="Milo123459/glitter" />
				</div>
			</main>
		</div>
	);
}
