'use client'

import React from "react"
import Navbar from "./Navbar"
import Quarter from "./Quarters"
import Footer from "./Footer"
import { Box, Text, Heading, StackProps, HStack, Flex, useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link"
import styles from "./About.module.css"

export default function Courses() {
    return (
        <>
            <Navbar />
            <Box as="section" mt={"10px"} pt={"200px"} bg={"gray.200"}> </Box>
            <Box as="section" p={"30px"} bg={"white"} mx={["10px", "auto", "auto"]} textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={"30px"}>Ambient Computing and IoT Specialization</Heading>
            </Box>
            <Box className={styles.about}>
                <Flex flexWrap={"wrap"} justifyContent={"center"}  >

                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "450px", xl: "600px" })} height={useBreakpointValue({ base: "550px", md: "380px", lg: "470px", xl: "400px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center">
                            <Heading color={"red.600"}>Quarter IV</Heading>
                            <Link href="#">
                                <Heading fontSize={useBreakpointValue({ base: "20px", md: "23px" })} pt="20px">Ambient Computing with Voice Assistants and Matter Devices</Heading>
                            </Link>
                            <Text pt={"20px"} fontSize={{base:"14px",md:"17px"}}>Ambient computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. In this course we will learn to build smart homes with Amazon Alexa and Matter protocol. </Text>
                        </Box>
                    </HStack>
                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "450px", xl: "600px" })} height={useBreakpointValue({ base: "540px", md: "380px", lg: "470px", xl: "400px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center" >
                            <Heading color={"red.600"}>Quarter V</Heading>
                            <Link href="#">
                                <Heading fontSize={useBreakpointValue({ base: "20px", md: "23px",xl:"28px" })} pt="20px">Embedded Programming using C and Rust</Heading>
                            </Link>
                            <Text pt={"20px"} fontSize={{base:"14px",md:"17px"}}> We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We will learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.</Text>
                        </Box>
                    </HStack>
                </Flex>
            </Box>
            <Footer />
        </>
    )
}