import React from "react"
import ProjectData from "./ProjectData"


export default function Projects() {

    // let ProjectDetails = ProjectData.map(data => {
    //     return (
    //         <div>
    //             <h1 className="project-name"> {data.name}</h1>
    //             <ul className="project-work"> {data.detail.map(detail => <li>{detail}</li>)} </ul>
    //         </div>
    //     )
    // })
    return (
        <div className="projects-detail">
            <div className="project">
                <div>
                    <h1 className="project-name">Accomplish</h1>
                    <ul className="project-work">
                        <li>Developing a workflow tool that will help software managers with goal tracking, feedback management and many more.</li>
                        <li>Developing a responsive application using <span>React, HTML and CSS</span>  that works  on multiple devices.</li>
                        <li>Deployed the application using netlify  with support for HTTPS and custom domain.</li>
                        <li>Deployed the static assets on a <span>CDN</span>.</li>
                        <li>Defined unit test and  integration tests using react testing library.</li>
                        <li>Integrated <span>RESTful</span> services and API to store data.</li>
                        <li>Leveraged newer features of react such as hooks, and refs to build the applications.</li>
                    </ul>
                </div>
                <div>
                    <h1 className="project-name">Video Streaming Application</h1>
                    <ul className="project-work">
                        <li>Implemented a video streaming application that supports search, filter, routing and pagination features.</li>
                        <li>Used Node.JS/Express backend server for streaming video files. It also supported storing metadata in a JSON DB.</li>
                        <li>Added video captions for accessibility.</li>
                        <li>Stored video files in a CDN for optimal performance.</li>
                        <li>Used ES6 and fetch to retrieve metadata about streaming video.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}