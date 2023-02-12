'use client'

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  StackProps,
  HStack,
  Container,
  Image
} from '@chakra-ui/react';
import Link from 'next/link';
import styles from "./About.module.css"


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
      h={'full'}
      // backgroundImage={
      //   'url(./images2.jpg)'
      // }
      // backgroundSize={'cover'}
      // backgroundPosition={'center center'}
      align="center"
      direction={useBreakpointValue({base:"column",sm:"column",md:'column',lg:"row",xl:"row"})}
      py="100px"
      >
      <VStack
      as="section"
        w={'full'}
        
        // textAlign="center"
        px={useBreakpointValue({ base: '4', md: '8' })}
        // bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        > 
        <Stack   spacing={6} >
          <Text
            color={'black'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '2xl',sm:"3xl", md: '4xl' })}>
            Become A Certified Web 3.0 and Metaverse Developer
          </Text>
          <Text
          color={'black'}
          fontWeight={400}
          lineHeight={1.0}
          fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
            A One and Quarter Years Panaverse DAO Earn as you Learn Program<br></br>
            Getting Ready for the Next Generation of the Internet<br></br>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies 
          </Text>
          <HStack direction={'row'} >
            <Button2
            href="https://portal.piaic.org/"
              bg={'red.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: '' }}>
              Apply
            </Button2>
            <Button2
            href="#"
              bg={'gray.300'}
              rounded={'full'}
              color={'black'}
              _hover={{ bg: '' }}>
              Visit PIAIC
            </Button2>
          </HStack>
        </Stack>
      </VStack>
      <Image className={styles.fadeinimage} src='images.jpg' p={useBreakpointValue({base:"10px",sm:"20px",md:"30px"})} w={useBreakpointValue({base:"300px",sm:"400px",md:"500px",lg:"700px",xl:"800px"})} shadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} />
    </Flex>
  );
}