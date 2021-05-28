import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';
import CodeLink from '../components/CodeLink';

export default function Projects() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code>
						<CodeLink
							link="https://github.com/Milo123459/vext"
							noPre={true}
							colour="pink"
						>
							vext
						</CodeLink>{' '}
						- vext is a code editor that lives in the terminal, written in V.{' '}
						<CodeLink link="/vext" noPre={true} colour="pink">
							website
						</CodeLink>
					</Code>
					<Code>
						<CodeLink
							link="https://github.com/Milo123459/manny"
							noPre={true}
							colour="pink"
						>
							manny
						</CodeLink>{' '}
						- manny is a documentation system for the terminal
					</Code>
					<Code>
						<CodeLink
							link="https://github.com/Milo123459/glitter"
							noPre={true}
							colour="pink"
						>
							glitter
						</CodeLink>{' '}
						- glitter is a git tool allowing you to template out commit
						messages.
					</Code>
				</div>
			</main>
		</div>
	);
}
