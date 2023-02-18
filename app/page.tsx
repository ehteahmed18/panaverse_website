'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import * as React from 'react'
import App from '../components/App'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from "react-dom/client";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  )
}






