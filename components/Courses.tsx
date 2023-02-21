'use client'

import { Box,Text,Flex,Heading,Stack,Button,StackProps,useBreakpointValue,HStack,Image,ScaleFade} from "@chakra-ui/react";
import React,{useRef} from "react";
import Link from "next/link";
import styles from "./About.module.css";
import { useInViewport } from "react-in-viewport";
import Quarter from "./Quarters";

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
            <Box p={"30px"} margin={"auto"} textAlign={"center"} mt={"20px"} mb={"40px"} border="2px" borderRadius={"2xl"} w="30%" bgColor={"gray.100"} >
                <Heading  >Courses <span style={{ color: "red" }}>We</span>  Offer</Heading>
            </Box>
        </Box>
        <Box className={styles.fadeinimage} pl="10px" pr="10px">
        <Heading mt="50px" textAlign={"left"}>Core Courses (Common in All Specializations):</Heading>
        <Text textAlign={"left"} mt="20px" fontSize={"20px"} mb="20px" >Every participant of the program will start by completing the following three core courses:</Text>
        </Box>
        <Quarter/>
        <Box className={styles.fadeinimage} pl="10px" pr="10px">
        <Heading mt="50px" textAlign={"left"}>Specialized <span style={{ color: "red" }}>Tracks:</span></Heading>
        <Text textAlign={"left"} mt="20px" fontSize={"20px"} mb="20px">After completing the first three quarters the participants will select one or more specializations consisting of two courses each:</Text>
        </Box>
        <Box className={styles.about}>
        <Flex flexWrap={"wrap"} justifyContent={"center"} pb="50px" >
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"520px",md:"550px",lg:"560px",xl:"530px"})} bg={"gray.100"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center" border="2px">
                        <Image w="100%" h="180px" src="ai.jpg" ></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})} pt="10px">Artificial Intelligence(AI) and Deep Learning Specialization</Heading>
                        <Text pt={"15px"}>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                        <Button2 href="../AI" mt={"10px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})}  height={useBreakpointValue({base:"520px",md:"550px",lg:"560px",xl:"530px"})} bg={"gray.100"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center" border="2px">
                        <Image w="100%" h="180px" src="meta.jpg" ></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})} pt="10px">Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
                        <Text pt={"15px"} fontSize={"14px"}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains.</Text>
                        <Button2 href="../metaverse" mt={"20px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"520px",md:"550px",lg:"560px",xl:"530px"})} bg={"gray.100"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center" border="2px">
                        <Image w="100%" h="180px" src="cc.jpg" ></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})} pt="10px">Cloud-Native Computing Specialization</Heading>
                        <Text pt={"60px"}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
                        <Button2 href="../cnc" mt={"40px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
            {/* </Flex>
            <Flex justifyContent={"center"}  direction={useBreakpointValue({base:"column",sm:"column",md:"column",lg:"row"})}> */}
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"520px",md:"550px",lg:"580px",xl:"530px"})}  bg={"gray.100"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center" border="2px"> 
                        <Image w="100%" h="180px" src="iot.jpg" ></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})} pt="10px">Ambient Computing and IoT Specialization</Heading>
                        <Text pt={"30px"}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. </Text>
                        <Button2 href="../IOT" mt={"30px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"550px",md:"550px",lg:"580px",xl:"530px"})}  bg={"gray.100"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                         textAlign="center" border="2px">
                        <Image w="100%" h="180px"  src="gnemonic.jpg"  ></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})} pt="10px">Genomics and Bioinformatics Specialization</Heading>
                        <Text pt={"10px"} fontSize={"14px"}>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. </Text>
                        <Button2 href="../Genomics" mt={"5px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
                <HStack m={useBreakpointValue({base:"10px",sm:"15px",md:"20px"})} justifyContent="center">
                    <Box className={styles.box} width={useBreakpointValue({base:"300px",sm:"300px",md:"300px",lg:"300px",xl:"350px"})} height={useBreakpointValue({base:"600px",md:"550px",lg:"580px",xl:"530px"})} bg={"gray.100"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center" border="2px" > 
                        <Image w="100%" h="180px" src="auto.jpeg" ></Image>
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})} pt="10px">Network Programmability and Automation Specialization</Heading>
                        <Text pt={"20px"} fontSize={"14px"}> Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile.</Text>
                        <Button2 href="../NPAS" mt={"30px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </HStack>
            </Flex>
        </Box>
        </>
    )
}