import React from "react"
import { Routes, Route } from "react-router-dom"
import ContactInfo from "./ContactInfo"
import Projects from "./Projects"
import Experience from "./Experience"

export default function ContentDetails(props) {
    return (
        <div className="content-details">
            {/* <div><button onClick={(event) => props.handleBack(event)} className="back-button">Home</button></div> */}
            <Routes>
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Routes>
                <Route path="/experience" element={<Experience />} />
            </Routes>
            <Routes>
                <Route path="/contact" element={<ContactInfo />} />
            </Routes>


        </div >

    )
}