'use client'

import React from "react"
import { Box, Text, Heading, ChakraProvider } from "@chakra-ui/react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Quarter3 from "@/components/Quarter3"


export default function Home() {
    return (
        <>
            <ChakraProvider>
            <Quarter3/>
            </ChakraProvider>
        </>
    )
}