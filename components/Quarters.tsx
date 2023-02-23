'use client'

import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Box, Text, Heading, StackProps, HStack, Flex, useBreakpointValue, Button, Stack } from "@chakra-ui/react"
import Link from "next/link"
import styles from "./About.module.css"


interface FeatureProps extends StackProps {
    href: any;
}

function Button2(props: FeatureProps) {
    const { href, children, ...rest } = props
    return (
        <Link href={href} passHref>
            {/*@ts-ignore*/}
            <Button {...rest}>
                {children}
            </Button>
        </Link>
    );
}

export default function Quarter() {
    return (
        <>
            <Box className={styles.about}>
                <Flex flexWrap={"wrap"} justifyContent={"center"}  >
                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box as="a" href="https://google.com" className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "700px", xl: "600px" })} height={useBreakpointValue({ base: "520px", md: "330px", lg: "330px", xl: "380px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow="xl"
                            textAlign="center" cursor={"pointer"} >
                            <Heading color={"red.600"}>Quarter I (Core)</Heading>
                            <Heading fontSize={useBreakpointValue({ base: "20px", md: "21px" })} pt="30px">CS-101: Object-Oriented Programming using TypeScript</Heading>
                            <Text pt={"40px"} fontSize={"17px"} >We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. </Text>
                        </Box>
                    </HStack>
                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box as="a" href="https://google.com" className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "700px", xl: "600px" })} height={useBreakpointValue({ base: "720px", md: "370px", lg: "370px", xl: "380px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center" cursor={"pointer"}>
                            <Heading color={"red.600"}>Quarter II (Core)</Heading>
                            <Heading fontSize={useBreakpointValue({ base: "20px", md: "21px" })} pt="10px">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Heading>
                            <Text pt={"10px"} fontSize={"17px"}>The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs.The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
                            </Text>
                        </Box>
                    </HStack>
                    <HStack m={useBreakpointValue({ base: "10px", sm: "15px", md: "20px" })} justifyContent="center">
                        <Box as="a" href="https://google.com" className={styles.box} width={useBreakpointValue({ base: "300px", sm: "300px", md: "650px", lg: "700px", xl: "600px" })} height={useBreakpointValue({ base: "400px", md: "300px", lg: "300px", xl: "380px" })} bg={"gray.50"} p={"30px"} borderRadius={"3xl"} border="2px" boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                            textAlign="center" cursor={"pointer"}>
                            <Heading color={"red.600"}>Quarter III (Core)</Heading>
                            <Heading fontSize={useBreakpointValue({ base: "20px", md: "21px" })} pt="20px">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Heading>
                            <Text pt={{ base: "20px", xl: "50px" }} fontSize={"17px"}>Earn While You Learn Projects<br></br>(A) Build Full-Stack Next.js 13 Jamstack Templates
                                <br></br>(B) Build QraphQL APIs</Text>
                        </Box>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}