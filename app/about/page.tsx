'use client'

import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import About from "@/components/About2"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home(){
    return(
        <ChakraProvider>
            <Navbar/>
            <div>
            <About/>
            </div>
            <Footer/>
        </ChakraProvider>
    )
}