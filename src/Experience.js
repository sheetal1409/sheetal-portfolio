import React from "react"
import ExperienceData from "./ExperienceData"

export default function Experience() {
    let Experiencedetails = ExperienceData.map(data => (
        <div className="exp-details">
            <div className="company-role">
                <div>
                    <h1 className="company">{data.company}</h1>
                    <h4 className="role">{data.role}</h4>
                </div>
                <h4 className="duration">{data.duration}</h4>
            </div>
            <div className="role-description">
                <ul className="job">{data.description.map(detail => <li>{detail}</li>)}</ul>
            </div>
        </div>
    ))
    return (
        <div className="experience">{Experiencedetails}</div>
    )
}