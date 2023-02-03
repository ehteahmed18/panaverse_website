'use client'

import { Box, Text, Heading, Flex,useBreakpointValue } from "@chakra-ui/react"
import { redirect } from "next/dist/server/api-utils"
import React from "react"

export default function Program() {
    return (
            <Flex direction="column" maxW="full" textAlign={"center"} bg="red.100" m={useBreakpointValue({base:"4",md:"8"})} borderRadius="20px">
                <Heading pt={["10px","10px","20px"]} fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>The Program in a Nutshell: Earn While You Learn</Heading>
                <Text pb={["10px","10px","20px"]} fontSize={useBreakpointValue({base:"1xl",md:"20px"})} >In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program`&#39;`s beginning. It resembles a cross between a corporate venture and an educational project.</Text>
            </Flex>
    )
}