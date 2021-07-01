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
			<CodeLink link="https://git.io/sponsor-milo">sponsor</CodeLink>
			<CodeLink link="https://git.io/milo">github</CodeLink>
		</div>
	);
}
