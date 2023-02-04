import React from "react";

export default function ContactInfo() {
    return (
        <div className="contact-details">
            <div className="contact-linkedin">
                <i class="fa-brands fa-linkedin"></i>
                <a className="contact-anchor" href="https://www.linkedin.com/in/sheetal-kulkarni-47509a190/" target="_blank">Sheetal Kulkarni</a>
            </div>
            <div className="contact-phone"> <i class="fa-regular fa-mobile"></i>
                <p className="contact phone">+1 669-454-7551</p>
                <span className="tool-tip">PST Zone</span></div>
            <div className="contact-email"><i class="fa-sharp fa-solid fa-square-envelope"></i>
                <p className="contact">sheetal.kulkarni91@gmail.com </p></div>
        </div >
    )
}