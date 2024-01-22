import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import LeftArrow from '../../assets/leftArrow.png'
import RightArrow from '../../assets/rightArrow.png'
const Testimonials = () => {
    const [selected,setSelected] = useState(0)
    const tLength = testimonialsData.length;
  return (
    <div className='testimonials'>
        <div className="right-t">
        <span>testimonials</span>
      <span className='stroke-text'>what they say</span>
      <span>about us</span>
      <span>{testimonialsData[selected].review}</span>
      <div className='review-author'>
        <span>{testimonialsData[selected].name} </span>
         -- <span> {testimonialsData[selected].status}</span>
      </div>
        </div>
        <div className="left-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            { <div className="arrows">
                <img onClick={()=>{
                    selected !== 0?setSelected((prev)=>{return prev-1}):setSelected(0)
                }} src={LeftArrow} alt="" />
                <img onClick={()=>{
                    selected !== tLength-1?setSelected((prev)=>prev+1):setSelected(tLength-1)
                }} src={RightArrow} alt="" />
            </div> }
        </div>
      
    </div>
  )
}

export default Testimonials
