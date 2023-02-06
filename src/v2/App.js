import React from 'react';
import { SectionTitle } from './SectionTitle'
import { AboutMe } from './AboutMe'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Contact } from './Contact'

function App() {
    return (
        <div className="main">
            <div className='header'>
                <div className="logo">{`< >`}</div>
                <nav>
                    <div className='nav-header'>
                        <div>
                            <a href="#aboutme">
                                <span className='nav-header-num'>01.</span>
                                <span className='nav-header-name'>About Me</span>
                            </a>
                        </div>
                        <div>
                            <a href="#experience">
                                <span className='nav-header-num'>02.</span>
                                <span className='nav-header-name'>Experience</span>
                            </a>
                        </div>
                        <div>
                            <a href="#projects">
                                <span className='nav-header-num'>03.</span>
                                <span className='nav-header-name'>Projects</span>
                            </a>
                        </div>
                        <div>
                            <a href="#contact">
                                <span className='nav-header-num'>04.</span>
                                <span className='nav-header-name'>Contact</span>
                            </a>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </nav>
            </div>
            <div className='content'>
                <main className='content-main'>
                    <section className="home">
                        <h1 className='secondary'>Hi, my name is</h1>
                        <h2 className='primary-light name'>Sheetal Kulkarni.</h2>
                        <h3 className='primary name'>I build web apps.</h3>

                        <p className="intro">
                            I  worked as a software professional for
                            7 years applying my skills  to delight customers with a
                            reliable product.Currently am focused on building responsive web apps.
                        </p>
                    </section>

                    <section id="aboutme" className="section">
                        <SectionTitle number="01." name="About Me"></SectionTitle>
                        <AboutMe />
                    </section>
                    <section id="experience" className="section">
                        <SectionTitle number="02." name="Experience"></SectionTitle>
                        <Experience />
                    </section>
                    <section id="projects" className="section">
                        <SectionTitle number="03." name="Projects"></SectionTitle>
                        <Projects />
                    </section>
                    <section id="contact" className="section">
                        <SectionTitle number="04." name="Contact"></SectionTitle>
                        <Contact />
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;