'use client'

import React from "react"
import { Box, Text, Heading, Stack, HStack, Flex, OrderedList, ListItem } from "@chakra-ui/react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export default function Quarter2() {
    return (
        <>
            <Navbar />
            <Box as="section" pt={"200px"} bg={"gray.200"}></Box>
            <Box as="section" p={"30px"} bg={"white"} mx={["10px", "auto", "auto"]} textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={{ base: "40px", md: "50px" }}>Quarter II</Heading>
            </Box>
            <Box w={{ base: "80%", md: "50%" }} textAlign={"justify"} margin="auto" mb="20px">
                <Heading fontSize={{ base: "20px", md: "25px" }} textDecoration="underline">Course Description: </Heading>
                <Text my="20px">The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).</Text>
                <Heading fontSize={{ base: "20px", md: "25px" }} textDecoration="underline">Course Outline: </Heading>
                <OrderedList>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "20px" }} my="10px" >Next.js 13 Web Development</Heading>
                        <Text fontSize="15px" mt="10px">Next 13 Official Documentation</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://beta.nextjs.org/docs">https://beta.nextjs.org/docs</Text>
                        <Text fontSize="15px" mt="10px">Latest Learn React Official Website</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://beta.reactjs.org/learn">https://beta.reactjs.org/learn</Text>
                        <Text fontSize="15px" mt="10px">Learn Next.js 13 Learning Repo</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://github.com/panaverse/learn-nextjs">https://github.com/panaverse/learn-nextjs</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "20px" }} my="10px" >Next.js 13 using Chakra UI (Remote Zoom Class)</Heading>
                        <Text fontSize="15px" mt="10px">CSS Flexbox Explained Complete Guide to Flexible Containers and Flex Items</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/">https://www.freecodecamp.org/news/css-flexbox-complete-guide/</Text>
                        <Text fontSize="15px" mt="10px">Chakra UI Docs</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://chakra-ui.com/getting-started">https://chakra-ui.com/getting-started</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "20px" }} my="10px" >UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</Heading>
                        <Text fontSize="15px" mt="10px">Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa">https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa</Text>
                        <Text fontSize="15px" mt="10px">Figma Design Kit for TailwindCSS</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.figma.com/community/file/768809027799962739">https://www.figma.com/community/file/768809027799962739</Text>
                        <Text fontSize="15px" mt="10px">Chakra UI Figma Kit</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.figma.com/community/file/971408767069651759">https://www.figma.com/community/file/971408767069651759</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "20px" }} my="10px" >API Routes with Next.js (Remote Zoom Class)</Heading>
                        <Text fontSize="15px" mt="10px">API Routes</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://nextjs.org/docs/api-routes/introduction">https://nextjs.org/docs/api-routes/introduction</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "20px" }} my="10px" >APIs with Next.js and tRPC (Remote Zoom Class)</Heading>
                        <Text fontSize="15px" mt="10px">Build a tRPC CRUD API Example with Next.js</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/">https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/</Text>
                        <Text fontSize="15px" mt="10px">Stop building REST APIs for your Next.js apps, use tRPC instead</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/">https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "20px" }} my="10px" >SQL and Prisma</Heading>
                        <Text fontSize="15px" mt="10px">Start from scratch with relational databases</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres">https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres</Text>
                        <Text fontSize="15px" mt="10px">SQL For Beginners Video Tutorial</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.youtube.com/watch?v=5hzZtqCNQKk">https://www.youtube.com/watch?v=5hzZtqCNQKk</Text>
                        <Text fontSize="15px" mt="10px">Database Management Systems and SQL – Tutorial for Beginners</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.freecodecamp.org/news/dbms-and-sql-basics/">https://www.freecodecamp.org/news/dbms-and-sql-basics/</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "20px" }} my="10px" >Next.js 13 using TailwindCSS (Remote Zoom Class)</Heading>
                        <Text fontSize="15px" mt="10px">Modern CSS with Tailwind, Second Edition by Noel Rappin</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/">https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "20px" }} my="10px" >AWS Application Composer (Remote Zoom Class)</Heading>
                        <Text fontSize="15px" mt="10px">What is AWS Application Composer?</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.youtube.com/watch?v=BujE_tik5r8">https://www.youtube.com/watch?v=BujE_tik5r8</Text>
                        <Text fontSize="15px" mt="10px">Event-driven apps with AWS Application Composer</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.youtube.com/watch?v=p411uh363jQ">https://www.youtube.com/watch?v=p411uh363jQ</Text>
                        <Text fontSize="15px" mt="10px">Visually design and build serverless applications quickly</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://aws.amazon.com/application-composer/">https://aws.amazon.com/application-composer/</Text>
                        <Heading fontSize={{ base: "16px", md: "20px" }} mt="15px" textDecoration={"underline"} >Must Have: Create Free AWS Account</Heading>
                        <Text fontSize="15px" mt="5px">AWS Free Trial:</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://aws.amazon.com/free/">https://aws.amazon.com/free/</Text>
                        <Text mt="15px" fontSize="15px">Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.</Text>
                        <Text mt="15px" fontSize="15px">Now you can create a virtual VISA Debit card through the NayaPay app (https://www.nayapay.com/ ) which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.</Text>
                        <Text fontSize="15px" mt="15px">You can also get a $300 credit</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html">https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "20px" }} my="10px" >Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</Heading>
                        <Text fontSize="15px" mt="10px">Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps</Text>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://github.com/panaverse/learn-multicloud-api-development">https://github.com/panaverse/learn-multicloud-api-development</Text>
                    </ListItem>
                </OrderedList>
                <Heading my="20px" fontSize={{ base: "16px", md: "18px" }} textDecoration="underline">Web 2.0 Projects: </Heading>
                <OrderedList>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "18px" }} my="10px" >Next.js Projects</Heading>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://github.com/panaverse/nextjs-projects">https://github.com/panaverse/nextjs-projects</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "18px" }} my="10px" >Styling Next.js Projects using TailwindCSS and Chakra UI</Heading>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://github.com/panaverse/styling-nextjs-projects">https://github.com/panaverse/styling-nextjs-projects</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "18px" }} my="10px" >Todo Full-Stack App</Heading>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://github.com/ogzhanolguncu/min-todo">https://github.com/ogzhanolguncu/min-todo</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "16px", md: "18px" }} my="10px" >Build a Twitter Clone</Heading>
                        <Text fontSize="15px" textColor="blue" as="a" href="https://www.youtube.com/watch?v=nzJsYJPCc80">https://www.youtube.com/watch?v=nzJsYJPCc80</Text>
                    </ListItem>
                </OrderedList>
            </Box>
            <Footer />
        </>
    )
}