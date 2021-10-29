import NeLi from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Center
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaHome, FaBlog, FaProjectDiagram } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';
import React from 'react';
function LinkItem({ href, path, children }) {
  const active = path === href;
  const inactivecolor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NeLi href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202033' : inactivecolor}
        borderRadius="lg"
      >
        {children}
      </Link>
    </NeLi>
  );
}

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
        <Center>
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
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
        </Stack>
        <ThemeSwitcher />
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NeLi href="/" passHref>
                  <MenuItem as={Link}>
                    <FaHome />
                    &nbsp;Home
                  </MenuItem>
                </NeLi>
                <NeLi href="/projects" passHref>
                  <MenuItem as={Link}>
                    <FaProjectDiagram />
                    &nbsp;Projects
                  </MenuItem>
                </NeLi>
                <NeLi href="/work" passHref>
                  <MenuItem as={Link}>
                    <FaBlog />
                    &nbsp;Work
                  </MenuItem>
                </NeLi>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
      </Center>

    </Box>
  );
}
