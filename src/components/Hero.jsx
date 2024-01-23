import React from 'react'
import './Hero.css'
import Header from './header/Header'
import HeroImage from '../assets/hero_image.png'
import HeroImageBack from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className=" blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        <div className="best-add">
            <div></div>
            <span>the best fitness clube in the town</span>
        </div>
        <div className="hero-text">
            <div>
            <div><span className='stroke-text'>SHAPE </span><span>Your</span></div>
            <div><span>ideal body</span></div>
            </div>
            <div><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
        </div>
        <div className="figures">
          <div><span>+140</span><span>Expert Coaches</span></div>
          <div><span>+978</span><span>Members Joined</span></div>
          <div><span>+50</span><span>Fitness Programs</span></div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>160 bpm</span>
        </div>
        <img src={HeroImage} alt="" className="hero-image" />
        <img src={HeroImageBack} alt="" className="hero-image-back" />
        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
