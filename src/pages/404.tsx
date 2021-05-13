import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';
import CodeLink from '../components/CodeLink';

export default function Home() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>  
                <div style={{paddingLeft: '80%'}}>          
                <Code>this isn't a valid page, go home</Code>
                </div>
            </main>
		</div>
	);
}
