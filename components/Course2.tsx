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
            <Box as="section" pt={"200px"} bg={"gray.200"} > </Box>
            <Box as="section" p={"30px"} bg={"white"} mx={["10px", "auto", "auto"]} textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={"30px"}>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
            </Box>
            <Box className={styles.about}>
                <Flex flexWrap={"wrap"} justifyContent={"center"}  >

                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "450px", xl: "600px" })} height={useBreakpointValue({ base: "470px", md: "350px", lg: "420px", xl: "360px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center">
                            <Heading color={"red.600"}>Quarter IV</Heading>
                            <Link href="#">
                                <Heading fontSize={useBreakpointValue({ base: "20px", md: "23px" })} pt="20px">Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Heading>
                            </Link>
                            <Text pt={"20px"} fontSize={{base:"14px",md:"17px"}}>In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.</Text>
                        </Box>
                    </HStack>
                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "450px", xl: "600px" })} height={useBreakpointValue({ base: "460px", md: "320px", lg: "420px", xl: "360px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center" >
                            <Heading color={"red.600"}>Quarter V</Heading>
                            <Link href="#">
                                <Heading fontSize={useBreakpointValue({ base: "20px", md: "23px" })} pt="10px">Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Heading>
                            </Link>
                            <Text pt={"20px"} fontSize={{base:"14px",md:"17px"}}>The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. The metaverse should replicate the best qualities of the web - it should just be the web. </Text>
                        </Box>
                    </HStack>
                </Flex>
            </Box>
            <Footer />
        </>
    )
}