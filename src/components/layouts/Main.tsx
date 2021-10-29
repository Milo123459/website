import { Container, Box } from '@chakra-ui/react';
import Nav from '../Nav';
import SEO from '../SEO';
export default function Main({ children, router }) {
	return (
		<Box as="main" pb={8}>
			<SEO page="Home" />
			<Nav path={router.asPath} />
			<Container maxW="container.md" pt={14}>
				{children}
			</Container>
		</Box>
	);
}
