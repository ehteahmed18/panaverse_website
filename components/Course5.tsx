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
                <Heading textColor={"red.600"} fontSize={"30px"}>Genomics and Bioinformatics Specialization</Heading>
            </Box>
                <Flex direction={"column"} borderTop={"1px"} borderColor={"chakra-border-color"}>
                <Quarter/>
                    <Box as="section"mt={["10px","20px","50px"]}mx={["10px","20px","50px"]}bg={"lightgrey"} maxW={"1200px"} height={["250px","130px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter IV</Heading>
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Genomics and Bioinformatics Specialization</Heading>
                        <Text px={"10px"}>This course will focus on learning the basics of the Python programming language through genomics examples. </Text>
                    </Box>
                    <Box as="section" mt={["10px","20px","50px"]}mx={["10px","20px","50px"]} mb={"10px"}bg={"lightgrey"} maxW={"1200px"} height={["260px","160px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter V</Heading>
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Bioinformatics with Python</Heading>
                        <Text px={"10px"}>In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.</Text>
                    </Box>
                </Flex>
                <Footer/>
        </>
    )
}