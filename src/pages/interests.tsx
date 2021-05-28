import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';
import CodeLink from '../components/CodeLink';

export default function Interests() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code><CodeLink link="https://rust-lang.org" noPre={true} colour="pink">rust</CodeLink> - i love rust, most of my new projects are written in rust.</Code>
					<Code><CodeLink link="https://starship.rs" noPre={true} colour="pink">starship</CodeLink> - starship is written in rust and is a terminal prompt theme. i contribute to it sometimes.</Code>
                    <Code><CodeLink link="https://vlang.io" noPre={true} colour="pink">v</CodeLink> - v is a new programming language with an amazing syntax.</Code>
				</div>
			</main>
		</div>
	);
}
