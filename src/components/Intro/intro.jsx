import React from 'react'
import './intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const intro = () => {

    // Animation variable add motion 
    const transition = { duration: 2, type: 'spring' }

    // Dark Mode Variable # add themeContext & useContext
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <div className="intro">

            <div className="i-left">
                <div className="i-name">
                    <span
                        style={{ color: darkMode ? 'white' : '' }}
                    >Hy I Am</span>
                    <span>Asaolu Oluwatobiloba</span>
                    <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="#" target="_blank" rel="kkk">
                        <img src={Github} alt="Github Icon" />
                    </a>

                    <a href="#" target="_blank" rel="asa">
                        <img src={LinkedIn} alt="LinkedIn Icon" />
                    </a>

                    <a href="#" target="_blank" rel="vcx">
                        <img src={Instagram} alt="Instagram Icon" />
                    </a>
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="Background One" />
                <img src={Vector2} alt="Background Two" />
                <img src={boy} alt="Oluwatobiloba Image" />

                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji}
                    alt="" />

                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%', color: 'black' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem', color: 'black' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                {/* *Blur Div */}
                <div className="blur" style={{ background: 'var(--blur2)' }}></div>
                <div className='blur' style={{
                    background: 'var(--blur1)',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem',
                }}></div>
            </div>

        </div>
    )
}

export default intro