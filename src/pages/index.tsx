import { Text, Spacer, Button, Grid, Modal, Link } from '@geist-ui/react';
import NextLink from 'next/link';
import { X } from '@geist-ui/react-icons';
import { useState } from 'react';

export default function Home() {
	const [openSourceState, setOpenSourceState] = useState(false);
	const openSourceHandler = () => setOpenSourceState(true);
	const openSourceCloseHandler = () => {
		setOpenSourceState(false);
	};
	const [planningState, setPlanningState] = useState(false);
	const planningHandler = () => setPlanningState(true);
	const planningCloseHandler = () => {
		setOpenSourceState(false);
	};
	return (
		<>
			<Spacer />
			<Text h1>Hey - I&apos;m Milo</Text>
			<Text h3>I like to program things.</Text>
			<Grid.Container>
				<Button auto onClick={openSourceHandler}>
					Open source projects
				</Button>
				<Modal visible={openSourceState} onClose={openSourceCloseHandler}>
					<Modal.Title>Open source projects</Modal.Title>
					<Modal.Content>
						<Text>
							<NextLink href="https://github.com/Milo123459/glitter" passHref>
								<Link icon color>
									Glitter
								</Link>
							</NextLink>{' '}
							- A simple, yet powerful way of templating commit messages
						</Text>
					</Modal.Content>
					<Modal.Action passive onClick={() => setOpenSourceState(false)}>
						<X />
						Close
					</Modal.Action>
				</Modal>
				<Spacer />
				<Button auto onClick={planningHandler}>
					Projects being planned
				</Button>
				<Modal visible={planningState} onClose={planningCloseHandler}>
					<Modal.Title>Projects being planned</Modal.Title>
					<Modal.Content>
						<Text>
							<NextLink href="/snippeter" passHref>
								<Link icon color>
									Snippeter
								</Link>
							</NextLink>{' '}
							- A fast and simple way of sharing code, deployable in one click.
							<NextLink href="/tabber" passHref>
								<Link icon color>
									Tabber
								</Link>
							</NextLink>{' '}
							- A beautiful, yet fake operating system for the browser. Fine
							tuned for developers.
						</Text>
					</Modal.Content>
					<Modal.Action passive onClick={() => setPlanningState(false)}>
						<X />
						Close
					</Modal.Action>
				</Modal>
			</Grid.Container>
		</>
	);
}
