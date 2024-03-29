import React from "react"

import { Link } from "react-router-dom"



export default function Header(props) {

    return (
        <div className="intro-page">
            <div className="intro">

                <div> <h1 className="profile-name">Sheetal Kulkarni</h1></div>
            </div>
            <div className="page-links">
                <div><a href="./Aboutme.js">About me</a></div>
                <div><Link to="/projects" onClick={(event) => props.handleClick(event)} className="link-hover" >Projects</Link></div>
                <div><Link to="/experience" onClick={(event) => props.handleClick(event)} className="link-hover">Experience</Link></div>
                <div><Link to="/contact" onClick={(event) => props.handleClick(event)} className="link-hover">Contact</Link></div>
            </div>
        </div >
    )
}

