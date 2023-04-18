'use client'

import React from "react"
import { Box, Text, Heading, Stack, HStack, Flex, ListItem, OrderedList } from "@chakra-ui/react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


export default function Quarter1() {
    return (
        <>
            <Navbar />
            <Box as="section" pt={"200px"} bg={"gray.200"}></Box>
            <Box as="section" p={"30px"} bg={"white"} mx={["10px", "auto", "auto"]} textAlign={"center"} mt={"-50px"} mb={"40px"} border={"2px"} maxW={"500px"} boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'} borderRadius={"2xl"} overflow="hidden">
                <Heading textColor={"red.600"} fontSize={{ base: "40px", md: "50px" }}>Quarter I</Heading>
            </Box>
            <Box w={{ base: "80%", md: "50%" }} textAlign={"justify"} margin="auto" mb="20px">
                <Heading fontSize={{ base: "20px", md: "25px" }} textDecoration="underline">Course Description: </Heading>
                <Text my="20px">We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspecti</Text>
                <Heading fontSize={{ base: "20px", md: "25px" }} textDecoration="underline">Course Outline: </Heading>
                <OrderedList>
                    <ListItem fontSize={"20px"}>
                        <Heading fontSize={{ base: "20px", md: "20px" }} my="10px">HTML and CSS (Homework)</Heading>
                        <Text mt="10px" fontSize="15px">Learn HTML by Hira Khan (Watch Recorded Videos)</Text>
                        <Text as="a" fontSize="15px" textColor={"blue"} href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6">https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "20px", md: "20px" }} my="10px" >Web 3.0 and Metaverse Theory :</Heading>
                        <Text fontSize="15px" mt="10px">Introduction to Panaverse DAO</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing ">https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing </Text>
                        <Text fontSize="15px" mt="10px">Web 3.0 User Guide</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing ">https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing </Text>
                        <Text fontSize="15px" mt="10px">Complete Web 3 Assignments included in the Web 3 User Guide</Text>
                        <Text fontSize="15px" mt="10px">Virtual and Augmented  Metaverse User Guide</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing  ">https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing </Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "20px", md: "20px" }} my="10px" >Fundamentals of Typescript :</Heading>
                        <Text fontSize="15px" my="10px">TypeScript Presentation</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing  ">https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing </Text>
                        <Text fontSize="15px" my="10px">Getting Started Exercises with TypeScript and Node.js</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md">https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md </Text>
                        <Text fontSize="15px" my="10px">Fundamentals of JavaScript and Node.js Quiz</Text>
                        <Text fontSize="15px" my="10px">Topics Covered in the Quiz:</Text>
                        <Text fontSize="15px" my="10px">A. Background of JavaScript and How to use JavaScript in Browser</Text>
                        <Text fontSize="15px">B. Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</Text>
                        <Text fontSize="15px">C. Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  ">https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing</Text>
                        <Text fontSize="15px">D. How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  ">https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  </Text>
                        <Text fontSize="15px" >E. Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)</Text>
                        <Text fontSize="15px" >F. Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</Text>
                        <Text fontSize="15px" >G. Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</Text>
                        <Text fontSize="15px">H. Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)</Text>
                        <Text fontSize="15px">I. Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)</Text>
                        <Text fontSize="15px">J. JavaScript promises, mastering the asynchronous</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript">https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript</Text>
                        <Text fontSize="15px" >K. New JavaScript Features in ECMAScript 2022 and 2021</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg">https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "20px", md: "20px" }} my="10px" >Object-Oriented Programming with TypeScript</Heading>
                        <Text fontSize="15px" my="10px" >Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1">https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1</Text>
                        <Text fontSize="15px" my="10px">Learning Repository</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://github.com/panaverse/learn-typescript">https://github.com/panaverse/learn-typescript</Text>
                        <Text fontSize="15px" my="10px">In Class Companion projects and articles for Learning TypeScript</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://www.learningtypescript.com/">https://www.learningtypescript.com/</Text>
                        <Text fontSize="15px" my="10px">Homework Project</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://github.com/panaverse/typescript-node-projects">https://github.com/panaverse/typescript-node-projects</Text>
                        <Text fontSize="15px" my="10px">Fundamentals of TypeScript Quiz</Text>
                        <Text fontSize="15px" my="10px">TypeScript Professional Proficiency Quiz</Text>
                    </ListItem>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "20px", md: "20px" }} my="10px" >TypeScript for React</Heading>
                        <Text fontSize="15px" my="10px">Minimal TypeScript Crash Course For React With Interactive Code Exercises</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://profy.dev/article/react-typescript">https://profy.dev/article/react-typescript</Text>
                    </ListItem>
                    <Heading fontSize={{ base: "20px", md: "20px" }} my="10px" textDecoration={"underline"}>Quarter Break Assignments and Quizzes</Heading>
                    <Text my="10px">During the Quarter Break, we do the following Assignments:</Text>
                    <Text my="10px" as="a" textColor={"blue"} href="https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge">1. https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge</Text><br></br>
                    <Text my="10px" as="a" textColor={"blue"} href="https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app">2. https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app</Text><br></br>
                    <Text my="10px" as="a" textColor={"blue"} href="https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_u">3. https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_u</Text>
                    <Text my="10px">4. Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document</Text>
                    <Text as="a" textColor={"blue"} href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing</Text>
                    <Text my="10px">The best-developed Website will be hosted on www.panaverse.co domain </Text>
                    <Text my="10px">5. Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document:</Text>
                    <Text as="a" textColor={"blue"} href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing">https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing</Text>
                    <Text my="10px">The best-developed Website will be hosted on www.piaic.org domain </Text>
                    <Text my="10px">After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</Text>
                </OrderedList>
                <OrderedList>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "20px", md: "20px" }} my="10px" >Fundamentals of Version Control with Git Quiz</Heading>
                        <Text fontSize="15px" my="10px">Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF">https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF</Text>
                        <Text fontSize="15px" my="10px">Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</Text>
                        <Text fontSize="15px" my="10px">We will also cover these readings:</Text>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://help.github.com/articles/markdown-basics/">https://help.github.com/articles/markdown-basics/</Text><br></br>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github">http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github</Text><br></br>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences">http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences</Text><br></br>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing">https://git-scm.com/book/en/v2/Git-Branching-Rebasing</Text><br></br>
                        <Text fontSize="15px" as="a" textColor={"blue"} href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches">http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches</Text><br></br>
                        <Text fontSize="15px" mt="10px" >For practice: </Text><Text as="a" textColor={"blue"} href="https://try.github.io/levels/1/challenges/1">https://try.github.io/levels/1/challenges/1</Text>
                        <Text fontSize="15px" mt="10px" >Homework: </Text><Text as="a" textColor={"blue"} href="https://www.datacamp.com/courses/introduction-to-git-for-data-science">https://www.datacamp.com/courses/introduction-to-git-for-data-science</Text>
                        <Text fontSize="15px" mt="10px" >Git Cheatsheet: </Text><Text as="a" textColor={"blue"} href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html">https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html</Text>
                    </ListItem>
                    <Heading fontSize={{ base: "16px", md: "18px" }} mt="10px" >Git Quiz</Heading>
                    <Text >Total Questions: 60, Total Time: 75 minutes</Text>
                    <ListItem fontSize="20px">
                        <Heading fontSize={{ base: "20px", md: "20px" }} my="10px" >TypeScript Proficiency Quiz</Heading>
                        <Text fontSize="15px" >Total Questions: 63 <br></br>Duration: 120 minutes</Text>
                        <Text fontSize="15px" mt="10px" >Study Material: </Text>
                        <Text fontSize="15px" my="40px" as="a" textColor={"blue"} href="https://github.com/panaverse/learn-typescript">https://github.com/panaverse/learn-typescript</Text>
                    </ListItem>
                </OrderedList>
            </Box>
            <Footer />
        </>
    )
}