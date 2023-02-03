'use client'

import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Box, Text, Heading, StackProps, HStack, Flex,useBreakpointValue} from "@chakra-ui/react"

export default function Quarter(){
    return(
        <><Box as="section" m={["10px", "20px", "50px"]} bg={"lightgrey"} maxW={"full"} height={["350px", "200px", "150px"]} borderRadius={"2xl"}>
            <Heading p={"10px"} fontSize={useBreakpointValue({ base: "18px", md: "20px" })} textColor={"red.600"}>Quarter I (Core)</Heading>
            <Heading pl={"10px"} fontSize={useBreakpointValue({ base: "22px", md: "24px" })}>Object-Oriented Programming using TypeScript:</Heading>
            <Text px={"10px"}>We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. </Text>
        </Box><Box as="section" mx={["10px", "20px", "50px"]} bg={"lightgrey"} maxW={"full"} height={["630px", "350px", "230px"]} borderRadius={"2xl"}>
                <Heading p={"10px"} fontSize={useBreakpointValue({ base: "18px", md: "20px" })} textColor={"red.600"}>Quarter II (Core)</Heading>
                <Heading pl={"10px"} fontSize={useBreakpointValue({ base: "22px", md: "24px" })}>Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Heading>
                <Text px={"10px"}>The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).</Text>
            </Box><Box as="section" mt={["10px", "20px", "50px"]} mx={["10px", "20px", "50px"]} bg={"lightgrey"} maxW={"full"} height={["290px", "180px"]} borderRadius={"2xl"}>
                <Heading p={"10px"} fontSize={useBreakpointValue({ base: "18px", md: "20px" })} textColor={"red.600"}>Quarter III (Core)</Heading>
                <Heading pl={"10px"} fontSize={useBreakpointValue({ base: "22px", md: "24px" })}>Dollar Making Bootcamp - Full-Stack Template and API Product Development</Heading>
                <Text px={"10px"}>Earn While You Learn Projects<br />(A) Build Full-Stack Next.js 13 Jamstack Templates<br />(B) Build QraphQL APIs</Text>
            </Box></>
    )
}