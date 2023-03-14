import React from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { useState } from 'react';


const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_myspiun', 'template_2ps2lnn', form.current, 'pf_n-0Nq6CfMz9M_2')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch </span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    
                    <input name="user_name" type="text" className="user" placeholder="Name" />
                    <input name="user_email" type="email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="send" className="button" />
                    <span>{done && "Thanks, you've reach out to me!"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--blur2)" }}
                    ></div>
                </form>
            </div>
        </div>

    )
}

export default Contact