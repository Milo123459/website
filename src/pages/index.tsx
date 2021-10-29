import { Container, Box, Heading, Center } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
import Section from '../components/Section';
import Layout from '../components/layouts/Article';

export default function Home() {
	return (
		<Layout title="Home">
			<Container>
				<Box display={{ md: 'flex' }}>
					<Box flexGrow={1}>
						<Center>
							<Section delay={0.1}>
								<Heading as="h2" variant="page-title">
									Hey! I&apos;m Milo 👋
								</Heading>
							</Section>
						</Center>
						<Center>
							<Section delay={0.1}>
								<p>I like to program things</p>
							</Section>
						</Center>
					</Box>
				</Box>

				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						About
					</Heading>
					<Paragraph>
						Hey! I&apos;m Milo, and I have been programming for 2 years. I
						started off with <code>JavaScript</code>, moved onto{' '}
						<code>TypeScript</code>, then at the start of 2021, looked into{' '}
						<code>Rust</code>. Almost all of my new projects have been written
						in Rust, and I love it for its performance and DX. Aside from how I
						started programming, my pronouns are <code>he/him</code>, and if you
						want to chat with me, you can send me a PM on Twitter{' '}
						<code>@salvagedev</code>.
					</Paragraph>
				</Section>
			</Container>
		</Layout>
	);
}
