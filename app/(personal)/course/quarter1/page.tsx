'use client'

import React from "react"
import { Box, Text, Heading, ChakraProvider } from "@chakra-ui/react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Quarter1 from "@/components/Quarter1"


export default function Home() {
    return (
        <>
            <ChakraProvider>
            <Quarter1/>
            </ChakraProvider>
        </>
    )
}

