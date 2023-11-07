import React from 'react'
import Glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import './Services.css'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className="services">

      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>Lorem ispum is simpley dummy text of printing of printing
          <br />
          Lorem ispum is simpley dummy text of printing
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* first card */}
        <div style={{left: '14rem'}}>
          <Card 
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}  
          />
        </div>

        {/* second card */}
        <div style={{top: '12rem' , left: '-4rem'}}>
        <Card 
            emoji = {Glasses}
            heading = {'Developer'}
            detail = {"Html, Css, JavaScript, React"}  
          />
        </div>

        {/* Third card */}
        <div style={{top: '19rem' , left: '12rem'}}>
        <Card 
            emoji = {Humble}
            heading = {'UI/UX'}
            detail = {"Lorem Ispum dummy text are usually use in section where we need some random text"}  
          />
        </div>

        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>

      </div>
    </div>
  )
}

export default Services