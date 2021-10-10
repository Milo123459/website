import { Text, Spacer, Grid, Card } from '@geist-ui/react';

export default function Tabber() {
	return (
		<>
			<Spacer />
			<Text h1>Tabber</Text>
			<Text h3>
				A beautiful, yet fake operating system for the browser. Fine tuned for
				developers.
			</Text>
			<Text h6>FEATURES</Text>
			<Grid.Container>
				<Grid>
					<Card>Deployable in 1 click</Card>
				</Grid>
				<Spacer />
				<Grid>
					<Card>&quot;Apps&quot; built for developers</Card>
				</Grid>
				<Spacer />
				<Grid>
					<Card>Simple, minimalistic UI</Card>
				</Grid>
			</Grid.Container>
			<Spacer />
			<Text h6>Coming soon.</Text>
		</>
	);
}
