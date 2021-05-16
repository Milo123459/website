import styles from '../styles/Base.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';
import CodeLink from '../components/CodeLink';

export default function Friends() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>
				<div style={{ paddingLeft: '3%' }}>
					<Code><CodeLink link="https://github.com/vladimyr" noPre={true} colour="pink">vladimyr</CodeLink> - cool guy, helps me a lot with rust :).</Code>
					<Code><CodeLink link="https://github.com/octocat" noPre={true} colour="pink">octocat</CodeLink> - who isn't friends with this cute guy</Code>
					<Code><CodeLink link="https://github.com/Suyashtnt" noPre={true} colour="pink">tabs</CodeLink> - helped teach me rust!</Code>
                    <Code><CodeLink link="https://github.com/funnion" noPre={true} colour="pink">funnion</CodeLink> - cool guy, been just a great guy to speak to!</Code>
				</div>
			</main>
		</div>
	);
}
