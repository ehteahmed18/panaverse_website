'use client'

import { Box,Text,Flex,Heading,HStack,Stack,Button,StackProps,useBreakpointValue} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

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

export default function Course(){
    return(
        <>
        <Box borderTop={"1px"} borderTopColor={"chakra-border-color"} margin={"auto"} textAlign={"center"}>
            <Box p={"10px"} margin={"auto"} textAlign={"center"} mt={"20px"} mb={"40px"}>
                <Heading>Courses <span style={{ color: "red" }}>We</span>  Offer</Heading>
            </Box>
        </Box>
        <Flex direction={["column", "column", "row"]}>
                <HStack >
                    <Box width={"350px"} height={useBreakpointValue({base:"320px",md:"350px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                    m={["10px","20px","50px"]} textAlign="center" >
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Artificial Intelligence(AI) and Deep Learning Specialization</Heading>
                        <Text pt={"15px"}>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                        <Button2 href="../AI" mt={"10px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack >
                    <Box width={"350px"} height={useBreakpointValue({base:"360px",md:"350px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                    m={["10px","20px","50px"]} textAlign="center">
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
                        <Text pt={"15px"} fontSize={"14px"}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>
                        <Button2 href="../metaverse" mt={"10px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack >
                    <Box width={"350px"} height={useBreakpointValue({base:"350px",md:"350px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                    m={["10px","20px","50px"]} textAlign="center">
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Cloud-Native Computing Specialization</Heading>
                        <Text pt={"60px"}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
                        <Button2 href="../cnc" mt={"40px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
            </Flex>
            <Flex direction={["column", "column", "row"]} mb={"40px"}>
                <HStack >
                    <Box width={"350px"} height={useBreakpointValue({base:"380px",md:"350px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                    m={["10px","20px","50px"]} textAlign="center">
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Ambient Computing and IoT Specialization</Heading>
                        <Text pt={"50px"}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. </Text>
                        <Button2 href="../IOT" mt={"30px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack >
                    <Box width={"350px"} height={useBreakpointValue({base:"370px",md:"350px"})} bg={"lightgray"} p={"20px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                        m={["10px","20px","50px"]} textAlign="center">
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Genomics and Bioinformatics Specialization</Heading>
                        <Text pt={"10px"} fontSize={"14px"}>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.</Text>
                        <Button2 href="../Genomics" mt={"5px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack>
                    <Box width={"350px"} height={useBreakpointValue({base:"400px",md:"350px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                    m={["10px","20px","50px"]} textAlign="center">
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Network Programmability and Automation Specialization</Heading>
                        <Text pt={"10px"} fontSize={"14px"}> Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</Text>
                        <Button2 href="../NPAS" mt={"20px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
            </Flex></>
    )
}