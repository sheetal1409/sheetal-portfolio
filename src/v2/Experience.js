import React from 'react'
import { useState } from 'react'
import { ExperienceContent } from './Frontend';

export function Experience() {
    const [selectedItem, setSelectedItem] = useState(0)

    function onExperienceCompanyClick(event) {
        const value = event.target.value;
        setSelectedItem(parseInt(value))
    }

    return <div className="experience">
        <div className='experience-company'>
            <ul className='experience-companyul' onClick={onExperienceCompanyClick}>
                <li className={selectedItem === 0 ? 'experience-selected' : ''} value={0}>Frontend</li>
                <li className={selectedItem === 1 ? 'experience-selected' : ''} value={1}>CSG</li>
                <li className={selectedItem === 2 ? 'experience-selected' : ''} value={2}>Cognizant</li>
            </ul>
        </div>
        <div className='experience-content'>
            {selectedItem === 0 ? <div><ExperienceContent roleName="Frontend Engineer" link="projects" companyName="Experience" duration="Sept 2021 - Present">
                <ul>
                    <li>Developed rich front-end applications, and user-interactive (UI) web pages using <span className='experiencejd-ul-span'>React, HTML5 and CSS</span></li>
                    <li>Used complex state management techniques using state and hooks</li>
                    <li>Added React-Router to build nested navigation</li>
                    <li>Extensively used Git for version control and CI/CD Deployements</li>
                </ul>
            </ExperienceContent></div> : null}
            {selectedItem === 1 ? <div><ExperienceContent roleName="Sr Test Consultant" companyName="CSG" duration="Sept 2017 - Sept 2021">
                <ul>
                    <li>Worked with <span className='experiencejd-ul-span'>5 different customers</span> and demonstrated customer obsession by delivering high quality products using <span className='experiencejd-ul-span'>Agile methodology</span>.</li>
                    <li>Led the QA team and ensured that the results are  delivered on time while keeping the stakeholders updated.</li>
                    <li>Designed, planned and developed several<span className='experiencejd-ul-span'> functional, integration,</span>and <span className='experiencejd-ul-span'> UAT</span> test cases.</li>
                    <li>Worked on Automating tests using Sveet Cucumber (Tool to automate  SingleView UI application).</li>
                    <li>Mentored new employees on both technical and business domains.</li>
                </ul>
            </ExperienceContent></div> : null}
            {selectedItem === 2 ? <div><ExperienceContent roleName="Associate Test Engineer" companyName="Cognizant" duration="Nov 2013 - Sept 2017">
                <ul>
                    <li>Involved in requirement understanding, test scenario preparation, test design, execution, and <span className='experiencejd-ul-span'> defect management</span>.</li>
                    <li>Worked with distributed agile teams.</li>
                </ul>
            </ExperienceContent></div> : null}
        </div>
    </div >
}