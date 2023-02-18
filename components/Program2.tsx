'use client'

import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Text,
  Heading,
  Button,
  useBreakpointValue,
  Image, HStack, Stack
} from '@chakra-ui/react';
import Link from 'next/link';
import styles from "./About.module.css"


export default function Program2() {
  return (
    <Flex my="40px" maxW="full" flexDirection={["column","column","column","row"]} px="10px">
      <Box w={["100%","100%","100%","45%"]}  >
        <Image className={styles.fadeinimage} width={["200px","200px","300px","400px","300px"]} margin="auto" src="program.jpg"></Image>
      </Box>
      <Box className={styles.mains} w={["100%","100%","100%","50%"]} border="2px" borderRadius={"20px"} bgColor="gray.100" px="20px" >
        <Heading  className={styles.fadeinimage} pt={["10px", "10px", "30px"]} fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>The Program in a Nutshell: Earn While You Learn</Heading>
        <Text className={styles.fadeinimage} pt="20px" pb={["10px", "10px", "20px"]} fontSize={useBreakpointValue({ base: "1xl", md: "20px" })} >In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program`&#39;s beginning. It resembles a cross between a corporate venture and an educational project.</Text>
      </Box>
    </Flex>
  );
}