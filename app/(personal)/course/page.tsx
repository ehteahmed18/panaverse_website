'use client'

import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import Course from "@/components/Courses"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home(){
    return(
        <ChakraProvider>
            <Navbar/>
            <div>
            <Course/>
            </div>
            <Footer/>
        </ChakraProvider>
    )
}