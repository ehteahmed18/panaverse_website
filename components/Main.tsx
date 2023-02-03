'use client'

import { Box, Text, Heading,Flex,Button,StackProps } from "@chakra-ui/react"
import { redirect } from "next/dist/server/api-utils"
import React from "react"
import Link from "next/link"

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

export default function Main() {
    return (
        <Box as={"section"} >        
        <Box pb={"180px"} pt={"170px"} textAlign={"center"}margin={"auto"} textColor={"white"} bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('images2.jpg')" bgPos={"center center"} bgSize={"cover"}>
            <Heading fontSize={"5xl"}pt={"30px"}>Certified Web 3.0 and Metaverse Developer</Heading>
            <Text pt={"20px"} fontWeight={"medium"} fontSize={"20px"} >A One and Quarter Years Panaverse DAO Earn as you Learn Program <br></br>
            Getting Ready for the Next Generation of the Internet<br></br>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies </Text>
            <Button2 href="https://portal.piaic.org/" mt="10px" bg={"lightgrey"}textColor={"black"} _hover={{bg:"red",textColor:"white"}}> Apply </Button2>
        </Box>
        </Box>

    )
}