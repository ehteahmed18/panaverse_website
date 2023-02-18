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
                <Flex direction={"column"} borderTop={"1px"} borderColor={"chakra-border-color"}>
                <Quarter/>
                    <Box className={styles.box}  as="section" mt={["10px","20px","50px"]}mx={["10px","20px","50px"]}bg={"lightgrey"} maxW={"full"} height={["440px","180px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter IV</Heading>
                        <Link href="https://google.com ">
                        <Heading pl={"10px"} fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Developing Planet-Scale Intelligent APIs and Python Programming</Heading>
                        </Link>
                        <Text px={"10px"}>We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAIs powerful models and Next.js 13. We will conclude the course by learning about basic programming concepts using Python. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.</Text>
                    </Box>
                    <Box className={styles.box}  as="section" mt={["10px","20px","50px"]} mx={["10px","20px","50px"]} mb={"10px"}bg={"lightgrey"} maxW={"full"} height={["500px","370px","200px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter V</Heading>
                        <Link href="#">
                        <Heading pl={"10px"} fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Deep Learning and MLOps</Heading>
                        </Link>
                        <Text px={"10px"}>This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance</Text>
                    </Box>
                </Flex>
            <Footer/>    
        </>
    )
}