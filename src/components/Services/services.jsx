import React from 'react'
import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
// import Resume from './Oluwatobiloba-Resume.docx'
import Resume from './ASAOLU-OLUWATOBILOBA-JOSEPH-RESUME.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'


const Services = () => {

    // Animation variable
    const transition = { duration: 2, type: 'spring' }

    // Dark Mode Variable # add themeContext & useContext
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className='services' id='Services'>

            {/* * Left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem,
                    <br />error, animi, praesentium nesciunt nostrum asperiores consequatur

                </span>
                <a href={Resume} download><button className="button s-button"> Download CV</button></a>
                <div className="blur s-blur1" style={{ background: 'var(--blur2)' }}></div>
            </div>

            {/* * Right side */}
            <div className="cards">

                <motion.div
                    initial={{ left: '25rem' }}
                    whileInView={{ left: '14rem' }}
                    transition={transition}
                    style={{ left: '14rem' }} >
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        details={"Figma, Sketch, Photoshop, Adobe xd"}
                    />
                </motion.div>

                {/* * Second Class */}
                <motion.div
                    // initial={{ left: '15rem' }}
                    // whileInView={{ left: '14rem' }}
                    // transition={transition}
                    style={{ top: '12rem', left: '-4rem' }} >
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        details={"Html, Css, JavaScript, React, PHP (Laravel)"}
                    />
                </motion.div>

                {/* * Third Class */}
                <div style={{ top: '19rem', left: '12rem' }} >
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        details={
                            "Exceptional GUI and User Experience Designer"
                        }
                    />
                </div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>

            </div>

        </div>
    )
}

export default Services