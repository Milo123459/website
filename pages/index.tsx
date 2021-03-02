import Head from 'next/head';
import styles from '../styles/main.module.css';
import { MarkGithubIcon, DeviceCameraIcon } from '@primer/octicons-react';
import Card from '../components/Card';
import Title from '../components/Title';
import Description from '../components/Description';
import ToggleDarkMode from '../components/ToggleDarkMode';

interface props {
	theme: {
		bg: string;
		fontColor: string;
	};
}

export default function Home(props: props) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Milo123459</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ToggleDarkMode></ToggleDarkMode>

			<style>{`html {background-color: ${props.theme.bg}`}</style>

			<main
				className={styles.main}
				style={{
					backgroundColor: props.theme.bg,
					color: props.theme.fontColor,
				}}
			>
				<h1 className={styles.title}>Welcome to my personal website.</h1>

				<p className={styles.description}>
					<a href="https://github.com/Milo123459" style={{ paddingRight: 30 }}>
						{' '}
						<MarkGithubIcon size={48} />
					</a>
					<a href="https://youtube.com/SalvageDev">
						<DeviceCameraIcon size={48} />
					</a>
				</p>

				<div className={styles.grid}>
					<Card
						title="About me"
						link="#about-me"
						description="Learn a little bit more about me."
					/>
					<Card
						title="My projects"
						link="#projects"
						description="View some of my recent and **cool** projects."
					/>
					<Card
						title="Recent commits"
						link="#recent-commits"
						description="See some of my recent commits in **awesome** public repositories."
					/>
				</div>
				<Title title="About me" />
				<Description description="Programmer who is always trying to get better. Interested in **Rust** other technologies." />
				<Title title="Projects" />
				<div className={styles.grid}>
					<Card
						title="Glitter"
						link="https://github.com/Milo123459/glitter"
						description="Speed up the way you commit to **Git**."
					/>
					<Card
						title="Website"
						link="https://github.com/Milo123459/website"
						description="My personal website. You're on it right now!"
					/>
				</div>
			</main>
		</div>
	);
}
