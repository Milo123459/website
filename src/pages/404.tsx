import NextLink from 'next/link';
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
    Center
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <Container>
            <Center>
                <Heading as="h1">Not found</Heading>
            </Center>
            <Center>
                <Text>The page you&apos;re looking for was not found.</Text>
            </Center>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">
                        Return&nbsp;
                        <FaHome />
                    </Button>
                </NextLink>
            </Box>
        </Container>
    );
};

export default NotFound;
