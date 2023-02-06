import React from 'react'

export function Contact() {
    return <div className='contact'>
        <div className='contact-heading'>Get In Touch</div>
        <div className='contact-description'>I’m currently looking for any new opportunities, my inbox is always open.</div>
        <div>
            <a rel="noopener noreferrer" href='mailto:sheetal.kulkarni91@gmail.com' className='contact-email'>Email</a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/sheetal-kulkarni-47509a190/" target="_blank" className='contact-email'>LinkedIn</a>
        </div>
        <div className='contact-email'>sheetal.kulkarni91@gmail.com</div>
    </div>
}