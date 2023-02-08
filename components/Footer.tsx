'use client'

import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image
  } from '@chakra-ui/react';
  import { FaGithub, FaTwitter, FaYoutube,FaFacebook } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
      <Image
        height={20}
        src ="https://www.panaverse.co/red-p-logo-text_dao_croped.png"
        alt='Panaverse'>
      </Image>
    );
  };
  
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
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        borderTop="1px"
        borderColor={"chakra-border-color"}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'full'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'center' }}
            align={{ base: 'center', md: 'center' }}>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'https://twitter.com/Panaverse_edu '}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://www.youtube.com/@panaverse/streams '}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Github'} href={' https://github.com/panaverse'}>
                <FaGithub/>
              </SocialButton>
              <SocialButton label={'Github'} href={'https://www.facebook.com/groups/panaverse '}>
                <FaFacebook/>
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }