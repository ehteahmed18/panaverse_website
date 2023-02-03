'use client'

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  StackProps,
  Stack,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import Link from 'next/link';

interface FeatureProps extends StackProps {
    href: any;
}

function Button2(props: FeatureProps) {
    const { href, children, ...rest } = props
    return (
          <Link href={href} passHref>
            {/*@ts-ignore*/}
            <Button {...rest}>
                {children}
            </Button>
        </Link>
    );
}

const Link1 = 'Dashboard';

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'https://google.com'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={['lightgrey','red.100','red.100']} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Image src="https://www.panaverse.co/red-p-logo-text_dao_croped.png" height={"60px"} ></Image>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Button2 href="./" bg="red.100"
              _hover={{bg:"red.400",textColor:"white"}} >Home</Button2>
              <Button2 href="./course" bg="red.100"
              _hover={{bg:"red.400",textColor:"white"}} >Course</Button2>
              <Button2 href="./course" bg="red.100"
              _hover={{bg:"red.400",textColor:"white"}} >About Us</Button2>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button2
            href="https://portal.piaic.org/"
              mr={4}
              bg={['lightgrey','red.100','red.100']}
              _hover={{bg:"red.400",textColor:"white"}}>
              Apply
            </Button2>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} bg="lightgrey">
            <Stack >
            <Button2 bg="lightgrey" href="./course">Home</Button2>
            <Button2 bg="lightgrey" href="./course">Course</Button2>
            <Button2 bg="lightgrey" href="./course">About Us</Button2>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}