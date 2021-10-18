import { Text, Grid } from '@geist-ui/react';
import { motion } from 'framer-motion';
import OpenSourceProjects from '../components/OpenSourceProjects';

export default function Home() {
	return (
		<>
			<Grid.Container justify="center">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
						},
						visible: {
							scale: 1,
							opacity: 1,
							transition: {
								delay: 0.4,
							},
						},
					}}
				>
					<Text h1>Projects</Text>
				</motion.div>
			</Grid.Container>
			<Grid.Container justify="center">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
						},
						visible: {
							scale: 1,
							opacity: 1,
							transition: {
								delay: 0.8,
							},
						},
					}}
				>
					<OpenSourceProjects />
				</motion.div>
			</Grid.Container>
		</>
	);
}
