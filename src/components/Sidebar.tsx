import CodeLink from './CodeLink';
import styles from '../styles/Components.module.css';

export default function Sidebar() {
	return (
		<div className={styles.sidebar}>
			<CodeLink link="/">home</CodeLink>
			<CodeLink link="/projects">projects</CodeLink>
			<CodeLink link="/recent">recent contributions</CodeLink>
			<CodeLink link="/interests">interests</CodeLink>
			<CodeLink link="/friends">friends</CodeLink>
			<CodeLink link="https://github.com/sponsors/Milo123459">sponsor</CodeLink>
		</div>
	);
}
