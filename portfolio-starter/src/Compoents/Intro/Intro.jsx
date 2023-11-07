import React from 'react';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import Github from '../../img/github.png';
import glassesimoji from '../../img/glassesimoji.png';
import Instagram from '../../img/instagram.png';
import LinkedIn from '../../img/linkedin.png';
import thumbup from '../../img/thumbup.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Andrew Thomas</span>
                <span>Frontend Developer with high
                    level of experience in web designing
                    and development, producting the 
                    Quality work</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top: '-4%' , left: '68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top: '18rem' , left: '0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </div>

            {/* Blur Divs */}
            <div className="blur" 
                style={{
                    background: '#CEF5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro