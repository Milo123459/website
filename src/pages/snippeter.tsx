import { Text, Spacer, Grid, Card } from '@geist-ui/react';

export default function Snippeter() {
	return (
		<>
			<Spacer />
			<Text h1>Snippeter</Text>
			<Text h3>
				A fast and simple way of sharing code, deployable in one click
			</Text>
			<Text h6>FEATURES</Text>
			<Grid.Container>
				<Grid>
					<Card>Deployable in 1 click</Card>
				</Grid>
				<Spacer />
				<Grid>
					<Card>Share snippets, or whole files</Card>
				</Grid>
				<Spacer />
				<Grid>
					<Card>File statistics</Card>
				</Grid>
				<Spacer />
				<Grid>
					<Card>Search snippets to find helpful code</Card>
				</Grid>
			</Grid.Container>
			<Spacer />
			<Text h6>Coming soon.</Text>
		</>
	);
}
