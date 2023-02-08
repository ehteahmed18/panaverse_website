'use client'

import Main from "./Main"
import Course from "./Courses"
import Program from "./Program"
import Main2 from "./Main2"
import About from "./About"
import Navbar from "./Navbar"
import Course2 from "./Coursesagain"
import Footer from "./Footer"


export default function App(){
    return(
        <div>
            <Navbar/>
            <Main2/>
            <Program/>
            <Course/>
            <About/>
            <Footer/>
        </div>
    )
}