import NextLink from 'next/link';
import {
	Container,
	Box,
	Link,
	Stack,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
	BreadcrumbItem,
	Breadcrumb,
	BreadcrumbLink,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaHome, FaProjectDiagram, FaMapPin } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';

export default function Nav(props) {
	const { path } = props;
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue('#ffffff20', '#20203380')}
			style={{ backdropFilter: 'blur(10px)' }}
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, nmd: 0 }}
				>
					<Breadcrumb fontWeight="medium" fontSize="sm">
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/"
								_hover={{ color: 'glassTeal' }}
								style={{
									color: path === '/' ? '#90f5f1' : '',
								}}
								isCurrentPage={path === '/'}
							>
								<FaHome />
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/projects"
								_hover={{ color: 'glassTeal' }}
								style={{
									color: path === '/projects' ? '#90f5f1' : '',
								}}
								isCurrentPage={path === '/projects'}
							>
								<FaProjectDiagram />
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/work"
								_hover={{ color: 'glassTeal' }}
								style={{
									color: path === '/where' ? '#90f5f1' : '',
								}}
								isCurrentPage={path === '/where'}
							>
								<FaMapPin />
							</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
				</Stack>
				<Box flex={1} align="right">
					<ThemeSwitcher />
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>
										<FaHome />
										&nbsp;Home
									</MenuItem>
								</NextLink>
								<NextLink href="/projects" passHref>
									<MenuItem as={Link}>
										<FaProjectDiagram />
										&nbsp;Projects
									</MenuItem>
								</NextLink>
								<NextLink href="/where" passHref>
									<MenuItem as={Link}>
										<FaMapPin />
										&nbsp;Where
									</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
