import {
    Avatar,
    Box,
    Center,
    chakra,
    Link,
    Stack,
    useColorModeValue,
    VisuallyHidden
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({
    children,
    label,
    href
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Footer = () => {
    return (
        <Box align="center" fontSize="sm">
            <Center>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton
                        label={'Twitter'}
                        href={'https://twitter.com/salvagedev'}
                    >
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton
                        label={'YouTube'}
                        href={'https://www.youtube.com/salvagedev'}
                    >
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton
                        label={'Github'}
                        href={'https://github.com/Milo123459'}
                    >
                        <FaGithub />
                    </SocialButton>
                </Stack>
            </Center>
            <br/>
            &copy; {new Date().getFullYear()} Miloblade. All Rights Reserved.
            <br />
            Made with ❤️ using
            <Link href="https://nextjs.org" target="_blank">
                <Avatar
                    size="xs"
                    src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
                />
            </Link>
            &nbsp;and&nbsp;
            <Link href="https://chakra-ui.com/" target="_blank">
                <Avatar
                    size="xs"
                    src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
                />
            </Link>
        </Box>
    );
};

export default Footer;
