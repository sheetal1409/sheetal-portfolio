import React from 'react'

export function AboutMe(props) {
    return (
        <div className='about-section'>
            <div className='about-details'>
                <p>Hello! My name is Sheetal and I enjoy creating things that live on the Internet. After providing UX insights on products as a QA Engineer, I wanted to bring the UX ideas to life by being a frontend engineer
                    and build interactive applications.
                </p>
                <p>In 2021, after 7+ years as a QA Tester, I began my frontend journey by learning HTML, CSS, Javascript and React. I received certification from Scrimba for frontend development. </p>

                <p>Since then I have built two production-ready React applications with test driven development. I enabled CI/CD and deployed applications to the internet using Netlify.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
                <div className="skills">
                    <div className='about-skillsets'> <ul>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                        <li>SQL</li>
                    </ul></div>
                    <div className='about-skillsets'> <ul>
                        <li>Cypress Automation</li>
                        <li>React Testing Library</li>
                        <li>Cucumber Framework</li>
                        <li>JIRA</li>
                        <li>Jenkins</li>
                        <li>Agile Methodology</li>
                    </ul></div>
                </div>
            </div>

            <div className='about-picture'>
                <img src="./profile.jpg" alt="profile" className='about-image' />
            </div>

        </div >)
}