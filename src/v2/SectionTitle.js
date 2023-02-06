import React from 'react'

export function SectionTitle(props) {
    return <div className='title-header'>
        <span className='secondary number'>{props.number}</span>
        <span className='name'>{props.name}</span>
    </div>
}