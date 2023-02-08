'use client'

import React from "react"
import Navbar from "./Navbar"
import Quarter from "./Quarters"
import Footer from "./Footer"
import { Box, Text, Heading, StackProps, HStack, Flex,useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link"

export default function Courses() {
    return (
        <>
            <Navbar />
            <Box as="section" pt={"200px"} bg={"gray.200"} > </Box>
                <Box as="section" p={"30px"} bg={"white"} mx={["10px","auto","auto"]} textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={"30px"}>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
            </Box>
                <Flex direction={"column"} borderTop={"1px"} borderColor={"chakra-border-color"}>
                <Quarter/>
                    <Box as="section"  mt={["10px","20px","50px"]}mx={["10px","20px","50px"]}bg={"lightgrey"} maxW={"full"} height={["500px","180px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter IV</Heading>
                        <Link href="https://google.com">
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Heading>
                        </Link>
                        <Text px={"10px"}>In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.</Text>
                    </Box>
                    <Box as="section" mt={["10px","20px","50px"]}mx={["10px","20px","50px"]} mb={"10px"} bg={"lightgrey"} maxW={"full"} height={["640px","220px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})}textColor={"red.600"}>Quarter V</Heading>
                        <Link href="#">
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Heading>
                        </Link>
                        <Text px={"10px"}>The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. Its unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.</Text>
                    </Box>
                </Flex>
                <Footer/>
        </>
    )
}