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
						you seem lost,{' '}
						<CodeLink link="/map" colour="#48bad7" noPre={true}>
							either get a map
						</CodeLink>
						, or{' '}
						<CodeLink link="/" noPre={true} colour="pink">
							go home
						</CodeLink>
					</Code>
				</div>
			</main>
		</div>
	);
}
