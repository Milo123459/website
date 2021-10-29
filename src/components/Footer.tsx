import {
	Box,
	Center,
	chakra,
	Stack,
	useColorModeValue,
	VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({
	children,
	label,
	href,
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
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
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
					<SocialButton label={'Github'} href={'https://github.com/Milo123459'}>
						<FaGithub />
					</SocialButton>
				</Stack>
			</Center>
			<br />
			&copy; {new Date().getFullYear()} Milo. All Rights Reserved.
		</Box>
	);
};

export default Footer;
