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
    <Flex borderTop={"2px"} borderColor="chakra-border-color" my="50px" maxW="full" flexDirection={["column","column","column","row"]} px={["10px","10px","10px","10px","40px"]} >
      <Box className={styles.main} w={["100%","100%","100%","40%"]} border="2px" borderRadius={"20px"} bgColor="gray.100" px="20px"  mt="40px" mb="20px">
        <Heading  className={styles.fadeinimage} pt={["10px", "10px", "30px"]} fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>Program of Studies</Heading>
        <Text className={styles.fadeinimage} pt="20px" pb={["10px", "10px", "20px"]} fontSize={useBreakpointValue({ base: "1xl", md: "15px" })} >This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</Text>
      </Box>
      <Box w={["100%","100%","100%","50%"]} m={["auto","auto","auto"]}  >
        <Image className={styles.fadeinimage} width={["200px","200px","300px","400px","450px"]} m="auto"  src="https://blog.edmentum.com/sites/blog.edmentum.com/files/styles/blog_image/public/images/Brainstorming_0.jpg?itok=OrCNYBS2"></Image>
      </Box>
    </Flex>
  );
}