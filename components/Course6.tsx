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
                <Box as="section" p={"30px"} bg={"white"} mx={["10px","auto","auto"]} textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={"30px"}>Network Programmability and Automation Specialization</Heading>
            </Box>
                <Flex direction={"column"} borderTop={"1px"} borderColor={"chakra-border-color"}>
                <Quarter/>
                    <Box as="section" mt={["10px","20px","50px"]}mx={["10px","20px","50px"]}bg={"lightgrey"} maxW={"1200px"} height={["360px","180px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter IV</Heading>
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}> CCNA 200-301 Certification</Heading>
                        <Text px={"10px"}>This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.</Text>
                    </Box>
                    <Box as="section" mt={["10px","20px","50px"]}mx={["10px","20px","50px"]} mb={"10px"}bg={"lightgrey"} maxW={"1200px"} height={["380px","180px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter V</Heading>
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Network Programmability and Automation</Heading>
                        <Text px={"10px"}>Traditional network management techniques cannott be effectively automated and cannot scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.</Text>
                    </Box>
                </Flex>
                <Footer/>
        </>
    )
}