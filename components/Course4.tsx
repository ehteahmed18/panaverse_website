'use client'

import React from "react"
import Navbar from "./Navbar"
import Quarter from "./Quarters"
import Footer from "./Footer"
import { Box, Text, Heading, StackProps, HStack, Flex,useBreakpointValue } from "@chakra-ui/react"

export default function Courses() {
    return (
        <>
            <Navbar />
            <Box as="section" mt={"10px"} pt={"200px"}bg={"gray.200"}> </Box>
                <Box as="section" p={"30px"} bg={"white"} mx={["10px","auto","auto"]}textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={"30px"}>Ambient Computing and IoT Specialization</Heading>
            </Box>
                <Flex direction={"column"} borderTop={"1px"} borderColor={"chakra-border-color"}>
                <Quarter/>
                    <Box as="section" mt={["10px","20px","50px"]}mx={["10px","20px","50px"]}bg={"lightgrey"} maxW={"1200px"} height={["650px","220px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter IV</Heading>
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Ambient Computing with Voice Assistants and Matter Devices</Heading>
                        <Text px={"10px"}>Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. In a multi-device world, people don't want to spend their life fussing with technology. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the interaction between these devices once they are connected. In this course we will learn to build smart homes with Amazon Alexa and Matter protocol. </Text>
                    </Box>
                    <Box as="section" mt={["10px","20px","50px"]}mx={["10px","20px","50px"]} mb={"10px"}bg={"lightgrey"} maxW={"1200px"} height={["550px","200px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter V</Heading>
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Embedded Programming using C and Rust</Heading>
                        <Text px={"10px"}>This is an introductory course about using the C and Rust Programming Languages on "Bare Metal" embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We'll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.</Text>
                    </Box>
                </Flex>
                <Footer/>
        </>
    )
}