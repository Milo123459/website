import { motion } from 'framer-motion';

interface Props {
	delay: number;
	children: React.ReactNode;
}

export default function Transition(props: Props) {
	return (
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
						delay: props.delay,
					},
				},
			}}
		>
			{props.children}
		</motion.div>
	);
}
