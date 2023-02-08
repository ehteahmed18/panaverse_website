'use client'

import { Box, Text, Flex, Heading, Stack, Button, StackProps, useBreakpointValue, HStack } from "@chakra-ui/react";
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

export default function Course2() {
    return (
        <Box scrollBehavior={"smooth"}>
            <Box borderTop={"1px"} borderTopColor={"chakra-border-color"} margin={"auto"} textAlign={"center"}>
                <Box p={"10px"} margin={"auto"} textAlign={"center"} mt={"20px"} mb={"40px"}>
                    <Heading >Courses <span style={{ color: "red" }}>We</span>  Offer</Heading>
                </Box>
            </Box>
            <Flex justifyContent={useBreakpointValue({ base: "center", sm: "center", md: "center" })} direction={useBreakpointValue({base:"column",sm:"column",md:"row"})}>
                <Stack direction="row"spacing={"5"}>
                    <Box width={"350px"} height={useBreakpointValue({ base: "320px", md: "350px" })} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                        textAlign="center" >
                        <Heading fontSize={useBreakpointValue({ base: "20px", md: "23px" })}>Artificial Intelligence(AI) and Deep Learning Specialization</Heading>
                        <Text pt={"15px"}>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                        <Button2 href="../AI" mt={"10px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                    <Box width={"350px"} height={useBreakpointValue({base:"360px",md:"350px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center">
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
                        <Text pt={"15px"} fontSize={"14px"}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>
                        <Button2 href="../metaverse" mt={"10px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                    <Box width={"350px"} height={useBreakpointValue({base:"350px",md:"350px"})} bg={"lightgray"} p={"30px"} borderRadius={"3xl"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
                     textAlign="center">
                        <Heading fontSize={useBreakpointValue({base:"20px",md:"23px"})}>Cloud-Native Computing Specialization</Heading>
                        <Text pt={"60px"}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>
                        <Button2 href="../cnc" mt={"40px"} bg={"light gray"} _hover={{ bg: "red.400", textColor: "white" }}>Learn More &gt;</Button2>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    )
} 