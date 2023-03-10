import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Oluwatobiloba</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <link spy={true} to='Navbar' smooth={true} activeClass={activeClass}>
                            <li>Home</li>
                        </link>
                        <link spy={true} to='Service' smooth={true} activeClass={activeClass}>

                        </link>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Porfolio</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>

        </div>
    )
}

export default Navbar