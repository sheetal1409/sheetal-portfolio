import React from 'react'

export function Projects() {
    return <div id="projects" className='projects'>
        <div className='project'>
            <div className='project-name'>Accomplish</div>
            <div className='project-description'>Developed a workflow tool that’ll help software managers with goal tracking, feedback management and many more. It is a responsive application built using React, HTML and CSS  that works  on multiple devices.</div>
            <div className='project-tools'><ul className='project-tools-ul'><li>HTML</li><li>CSS</li><li>React</li><li>Javascript</li></ul></div>
        </div>
        <div className='project'>
            <div className='project-name'>Video Streaming App</div>
            <div className='project-description'>Implemented a video streaming application that supports search, filter, routing and pagination features. Node.JS/Express backend server was used for streaming video files. The metadata was stored in a JSON DB.</div>
            <div className='project-tools'><ul className='project-tools-ul'><li>HTML</li><li>CSS</li><li>React</li><li>Express</li></ul></div>
        </div>
    </div>
}