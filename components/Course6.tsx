'use client'

import React from "react"
import Navbar from "./Navbar"
import Quarter from "./Quarters"
import Footer from "./Footer"
import { Box, Text, Heading, StackProps, HStack, Flex,useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link"
import styles from "./About.module.css"

export default function Courses(){
    return (
        <>
            <Navbar />
            <Box as="section" mt={"10px"} pt={"200px"}bg={"gray.200"}> </Box>
                <Box as="section" p={"30px"} bg={"white"} mx={["10px","auto","auto"]} textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={"29px"}>Network Programmability and Automation Specialization</Heading>
            </Box>
            <Box className={styles.about}>
                <Flex flexWrap={"wrap"} justifyContent={"center"}  >

                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "450px", xl: "600px" })} height={useBreakpointValue({ base: "530px", md: "320px", lg: "400px", xl: "350px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center">
                            <Heading color={"red.600"}>Quarter IV</Heading>
                            <Link href="#">
                                <Heading fontSize={useBreakpointValue({ base: "20px", md: "23px",xl:"28px" })} pt="20px">CCNA 200-301 Certification</Heading>
                            </Link>
                            <Text pt={"30px"} fontSize={"17px"}>This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.</Text>
                        </Box>
                    </HStack>
                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "450px", xl: "600px" })} height={useBreakpointValue({ base: "540px", md: "300px", lg: "400px", xl: "350px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center" >
                            <Heading color={"red.600"}>Quarter V</Heading>
                            <Link href="#">
                                <Heading fontSize={useBreakpointValue({ base: "20px", md: "23px",xl:"28px" })} pt="20px">Network Programmability and Automation</Heading>
                            </Link>
                            <Text pt={"20px"} fontSize={"17px"}>Traditional network management techniques cannott be effectively automated and cannot scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.</Text>
                        </Box>
                    </HStack>
                </Flex>
            </Box>
            <Footer/>
        </>
    )
}