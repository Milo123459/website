import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { MarkGithubIcon, DeviceCameraIcon } from '@primer/octicons-react';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Milo123459</title>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:title" content="Milo123459" />
				<meta
					property="og:description"
					content="Personal website for Milo123459."
				/>
			</Head>

			<main className={styles.main}>
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
					<a href="#about-me" className={styles.card}>
						<h3>About me &rarr;</h3>
						<p>Learn a little bit more about me.</p>
					</a>
					<a href="#projects" className={styles.card}>
						<h3>My projects &rarr;</h3>
						<p>View some of my recent and cool projects.</p>
					</a>
				</div>
				<h1 className={styles.title} id="about-me">
					About me
				</h1>
				<p className={styles.description}>
					Programmer who enjoys making projects.
				</p>
				<h1 className={styles.title} id="projects">
					Projects
				</h1>
				<div className={styles.grid}>
					<a
						href="https://github.com/Milo123459/glitter"
						className={styles.card}
					>
						<h3>Glitter &rarr;</h3>
						<p>
							Speed up the way you commit to <b>Git</b>.
						</p>
					</a>
					<a
						href="https://github.com/Milo123459/website"
						className={styles.card}
					>
						<h3>Website &rarr;</h3>
						<p>My personal website.</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}
