'use client'


import Course from "./Courses"
import Program from "./Program"
import Main2 from "./Main2"
import About from "./About"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Program2 from "./Program2"


export default function App(){
    return(
        <div>
            <Navbar/>
            <Main2/>
            <Program2/>
            <Course/>
            <Program/>
            <About/>
            <Footer/>
        </div>
    )
}