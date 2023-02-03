'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import React from 'react'
import App from '../components/App'
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  )
}

