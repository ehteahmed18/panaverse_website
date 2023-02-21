'use client'

import React from "react"
import Navbar from "./Navbar"
import Quarter from "./Quarters"
import Footer from "./Footer"
import { Box, Text, Heading, StackProps, HStack, Flex,useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link"
import styles from "./About.module.css"

export default function Courses() {
    return (
        <>
            <Navbar />
            <Box as="section" mt={"10px"} pt={"200px"}bg={"gray.200"}> </Box>
                <Box as="section" p={"30px"} bg={"white"} mx={["10px","auto","auto"]}textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={"30px"}>Genomics and Bioinformatics Specialization</Heading>
            </Box>
            <Box className={styles.about}>
                <Flex flexWrap={"wrap"} justifyContent={"center"}  >

                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "450px", xl: "600px" })} height={useBreakpointValue({ base: "380px", md: "250px", lg: "300px", xl: "270px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center">
                            <Heading color={"red.600"}>Quarter IV</Heading>
                            <Link href="#">
                                <Heading fontSize={useBreakpointValue({ base: "20px", md: "23px",xl:"29px" })} pt="20px">Genomics and Bioinformatics Specialization</Heading>
                            </Link>
                            <Text pt={"20px"} fontSize={"17px"}>This course will focus on learning the basics of the Python programming language through genomics examples. </Text>
                        </Box>
                    </HStack>
                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "450px", xl: "600px" })} height={useBreakpointValue({ base: "380px", md: "250px", lg: "300px", xl: "270px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center" >
                            <Heading color={"red.600"}>Quarter V</Heading>
                            <Link href="#">
                                <Heading fontSize={useBreakpointValue({ base: "20px", md: "23px",xl:"29px" })} pt="20px">Bioinformatics with Python</Heading>
                            </Link>
                            <Text pt={"20px"} fontSize={"17px"}>In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.</Text>
                        </Box>
                    </HStack>
                </Flex>
            </Box>
            <Footer/>
        </>
    )
}