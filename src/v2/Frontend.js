import React from "react"

export function ExperienceContent(props) {
    return (
        <div className="experience-roledetail">
            {props.link && <div className="experience-role">{props.roleName}<span> - <a href={`#${props.link}`}>{props.companyName}</a></span></div>}
            {!props.link && <div className="experience-role">{props.roleName}<span> - {props.companyName}</span></div>}
            <div className="experience-duration">{props.duration}</div>
            <div className="experience-jd">
                {props.children}
            </div>
        </div>
    )
}