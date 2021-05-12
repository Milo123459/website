import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';
import Code from '../components/Code';

export default function Home() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<main className={styles.main}>  
                <div style={{paddingLeft: '80%'}}>          
                <Code>hi</Code>
                <Code>i love writing code</Code>
                <Code>i do it too much</Code>
                <Code>i seriously need help</Code>
                </div>
            </main>
		</div>
	);
}
