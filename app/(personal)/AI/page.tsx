'use client'

import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import Courses from "@/components/Course1"

export default function Home(){
    return(
        <ChakraProvider>
            <Courses/>
        </ChakraProvider>
    )
}