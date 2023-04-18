'use client'

import React from "react"
import { Box, Text, Heading, Stack, HStack, Flex } from "@chakra-ui/react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Quarter3() {
    return (
        <>
            <Navbar />
            <Box as="section" pt={"200px"} bg={"gray.200"}></Box>
            <Box as="section" p={"30px"} bg={"white"} mx={["10px", "auto", "auto"]} textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={{ base: "40px", md: "50px" }}>Quarter III</Heading>
            </Box>
            <Box w={{ base: "80%", md: "50%" }} textAlign={"justify"} margin="auto" mb="20px">
                <Heading my="50px" fontSize={{ base: "20px", md: "25px" }} textDecoration="underline">Earn While You Learn Projects</Heading>
                <Heading my="10px" fontSize={{ base: "20px", md: "20px" }}>A. Build Full-Stack Next.js 13 Jamstack Templates:</Heading>
                <Text my="10px" >You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. </Text>
                <Text mt="20px">The Template Standard:</Text>
                <Text as="a" textColor={"blue"} href="https://github.com/panaverse/panaverse-template-standard">https://github.com/panaverse/panaverse-template-standard</Text>
                <Heading my="20px" fontSize={{ base: "20px", md: "20px" }}>B. Build QraphQL APIs</Heading>
                <Text my="10px">You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. </Text>
            </Box>
            <Footer />
        </>
    )
}