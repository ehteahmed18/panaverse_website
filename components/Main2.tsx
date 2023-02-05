'use client'

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  StackProps,
} from '@chakra-ui/react';
import Link from 'next/link';

interface FeatureProps extends StackProps {
  href: any;
}

function Button2(props: FeatureProps) {
  const { href, children, ...rest } = props
  return (
    /*@ts-ignore*/
        <Link href={href} passHref>
          {/*@ts-ignore*/}
          <Button {...rest}>
              {children}
          </Button>
      </Link>
  );
}

export default function Main2() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(./images2.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      align="center">
      <VStack
      as="section"
        w={'full'}
       
        textAlign="center"
        px={useBreakpointValue({ base: '4', md: '8' })}
        // bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        > 
        <Stack   spacing={6} >
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
            Become A Certified Web 3.0 and Metaverse Developer
          </Text>
          <Text
          color={'white'}
          fontWeight={300}
          lineHeight={1.0}
          fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
            A One and Quarter Years Panaverse DAO Earn as you Learn Program<br></br>
            Getting Ready for the Next Generation of the Internet<br></br>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies 
          </Text>
          <Stack direction={'row'} >
            <Button2
            href="https://portal.piaic.org/"
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Apply
            </Button2>
            <Button2
            href="#"
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Visit PIAIC
            </Button2>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}