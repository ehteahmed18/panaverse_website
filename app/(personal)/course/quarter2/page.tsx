'use client'

import React from "react"
import { Box, Text, Heading, ChakraProvider } from "@chakra-ui/react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Quarter2 from "@/components/Quarter2"


export default function Home() {
    return (
        <>
            <ChakraProvider>
            <Quarter2/>
            </ChakraProvider>
        </>
    )
    } 