import { useState } from 'react';
import { Button, Modal, Text, Spacer, Link } from '@geist-ui/react';
import NextLink from 'next/link';
import { X } from '@geist-ui/react-icons';

interface Project {
	name: string;
	link: string;
	description: string;
}

const projects: Project[] = [
	{
		name: 'Glitter',
		link: 'https://github.com/Milo123459/glitter',
		description: 'A simple, yet powerful way of templating commit messages',
	},
	{
		name: 'GreenwichDB',
		link: 'https://github.com/GreenwichDB/GreenwichDB',
		description:
			"Go back to the start of time, where DataStores weren't complex. (Roblox)",
	},
];

export default function OpenSourceProjects() {
	const [openSourceState, setOpenSourceState] = useState(false);
	const openSourceHandler = () => setOpenSourceState(true);
	const openSourceCloseHandler = () => {
		setOpenSourceState(false);
	};

	return (
		<>
			<Button auto onClick={openSourceHandler}>
				Open source projects
			</Button>
			<Modal visible={openSourceState} onClose={openSourceCloseHandler}>
				<Modal.Title>Open source projects</Modal.Title>
				<Modal.Content>
					<Text>
						{projects.map((project, index) => {
							return (
								<div key={index}>
									<NextLink href={project.link} passHref>
										<Link icon color>
											{project.name}
										</Link>
									</NextLink>{' '}
									- {project.description}
									{index == projects.length - 1 ? null : <Spacer />}
								</div>
							);
						})}
					</Text>
				</Modal.Content>
				<Modal.Action passive onClick={() => setOpenSourceState(false)}>
					<X />
					Close
				</Modal.Action>
			</Modal>
		</>
	);
}
