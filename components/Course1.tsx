'use client'

import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Quarter from "./Quarters"
import { Box, Text, Heading, StackProps, HStack, Flex,useBreakpointValue,Button} from "@chakra-ui/react"
import Link from "next/link"
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

export default function Courses() {
    return (
        <>
            <Navbar />
            <Box as="section" pt={"200px"}bg={"gray.200"} 
      > </Box>
                <Box as="section" p={"30px"} bg={"white"} mx={["10px","auto","auto"]}textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={"30px"}>Artificial Intelligence(AI) and Deep Learning Specialization</Heading>
            </Box>
            <Box className={styles.about}>
        <Flex flexWrap={"wrap"} justifyContent={"center"}  >
                
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"650px",lg:"450px",xl:"600px"})} height={useBreakpointValue({base:"550px",md:"360px",lg:"480px",xl:"390px"})}  bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                         textAlign="center">
                        <Heading color={"red.600"}>Quarter IV</Heading>
                        <Link href="#">
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})} pt="10px">AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</Heading>
                        </Link>
                        <Text pt={"10px"} fontSize={{base:"14px",md:"17px"}}>We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAIs powerful models and Next.js 13. We&#39ll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.</Text>
                    </Box>
                </HStack>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"650px",lg:"450px",xl:"600px"})} height={useBreakpointValue({base:"570px",md:"370px",lg:"480px",xl:"390px"})} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center" > 
                     <Heading color={"red.600"}>Quarter V</Heading>
                     <Link href="#">
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})} pt="10px">AI-361: Deep Learning and MLOps</Heading>
                        </Link>
                        <Text pt={"20px"} fontSize={{base:"14px",md:"17px"}}>This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.</Text>
                    </Box>
                </HStack>
            </Flex>
        </Box>
            <Footer/>    
        </>
    )
}