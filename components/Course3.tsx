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
            <Box as="section" mt={"10px"} pt={"200px"}bg={"gray.200"}> </Box>
                <Box as="section" p={"30px"} bg={"white"} mx={["10px","auto","auto"]}textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={"30px"}>Cloud-Native Computing Specialization</Heading>
            </Box>
                <Flex direction={"column"} borderTop={"1px"} borderColor={"chakra-border-color"}>
               <Quarter/>
                    <Box as="section" mt={["10px","20px","50px"]}mx={["10px","20px","50px"]}bg={"lightgrey"} maxW={"full"} height={["490px","180px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter IV</Heading>
                        <Link href="#">
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Certified Kubernetes Application Developer (CKAD)</Heading>
                        </Link>
                        <Text px={"10px"}>Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.</Text>
                    </Box>
                    <Box as="section" mt={["10px","20px","50px"]}mx={["10px","20px","50px"]} mb={"10px"}bg={"lightgrey"} maxW={"1200px"} height={["530px","200px"]} borderRadius={"2xl"}>
                        <Heading p={"10px"} fontSize={useBreakpointValue({base:"18px",md:"20px"})} textColor={"red.600"}>Quarter V</Heading>
                        <Link href="#">
                        <Heading pl={"10px"}fontSize={useBreakpointValue({base:"22px",md:"24px"})}>Developing Multi-Cloud Apps using CDK for Terraform</Heading>
                        </Link>
                        <Text px={"10px"}>Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures. Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.</Text>
                    </Box>
                </Flex>
                <Footer/>
        </>
    )
}