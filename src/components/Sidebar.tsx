import CodeLink from './CodeLink';
import styles from '../styles/Components.module.css';

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<CodeLink link="/" text="home" />
			<CodeLink link="/projects" text="projects" />
			<CodeLink link="/activity" text="activity" />
			<CodeLink link="/recent" text="recent contributions" />
		</div>
	);
}
