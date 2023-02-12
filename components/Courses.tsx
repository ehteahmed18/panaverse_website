'use client'

import { Box,Text,Flex,Heading,Stack,Button,StackProps,useBreakpointValue,HStack,Image} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import styles from "./About.module.css";

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
        <Box className={styles.fadeinimage} borderTop={"1px"} borderTopColor={"chakra-border-color"} margin={"auto"} textAlign={"center"}>
            <Box p={"10px"} margin={"auto"} textAlign={"center"} mt={"20px"} mb={"40px"}>
                <Heading >Courses <span style={{ color: "red" }}>We</span>  Offer</Heading>
            </Box>
        </Box>
        <Box className={styles.about}>
        <Flex justifyContent={"center"}  direction={useBreakpointValue({base:"column",sm:"column",md:"column",lg:"row"})}>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"520px",md:"550px",lg:"560px",xl:"530px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center" >
                        <Image src="ai.jpg" w="500px" pb="20px"></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Artificial Intelligence(AI) and Deep Learning Specialization</Heading>
                        <Text pt={"15px"}>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                        <Button2 href="../AI" mt={"10px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})}  height={useBreakpointValue({base:"520px",md:"560px",lg:"560px",xl:"530px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center">
                        <Image src="meta.jpg" w="500px" h={useBreakpointValue({lg:"170px",xl:"200px"})} pb="20px"></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
                        <Text pt={"15px"} fontSize={"14px"}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>
                        <Button2 href="../metaverse" mt={"10px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"520px",md:"540px",lg:"560px",xl:"530px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center">
                        <Image src="cc.jpg" h={useBreakpointValue({lg:"170px",xl:"200px"})} pb="20px"></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Cloud-Native Computing Specialization</Heading>
                        <Text pt={"60px"}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
                        <Button2 href="../cnc" mt={"40px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
            </Flex>
            <Flex justifyContent={"center"}  direction={useBreakpointValue({base:"column",sm:"column",md:"column",lg:"row"})}>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"520px",md:"550px",lg:"580px",xl:"580px"})}  bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center">
                        <Image src="iot.jpg" pb="20px" w="400px"    h={useBreakpointValue({lg:"170px",xl:"220px"})} ></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Ambient Computing and IoT Specialization</Heading>
                        <Text pt={"30px"}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. </Text>
                        <Button2 href="../IOT" mt={"30px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"550px",md:"570px",lg:"580px",xl:"580px"})}  bg={"lightgray"} p={"20px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                         textAlign="center">
                        <Image src="gnemonic.jpg" mt="5px" pb="20px" h={useBreakpointValue({lg:"170px",xl:"220px"})}></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Genomics and Bioinformatics Specialization</Heading>
                        <Text pt={"10px"} fontSize={"14px"}>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.</Text>
                        <Button2 href="../Genomics" mt={"5px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"600px",md:"600px",lg:"580px",xl:"580px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center" > 
                        <Image src="auto.jpeg" pb="20px" h={useBreakpointValue({lg:"170px",xl:"210px"})} w="400px"></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Network Programmability and Automation Specialization</Heading>
                        <Text pt={"10px"} fontSize={"14px"}> Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</Text>
                        <Button2 href="../NPAS" mt={"20px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
            </Flex>
        </Box>
        </>
    )
}