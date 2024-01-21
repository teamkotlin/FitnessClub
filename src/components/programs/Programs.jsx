import React from 'react'
import './Programs.css'
import RightArrow from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData'
const Programs = () => {
  return (
    <div className='programs'>
      <div>
        <span className='stroke-text'>explore our</span>
        <span>programs</span>
        <span className='stroke-text'>to shape you</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program)=>(<div className='program'>
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className='join-now'>
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" />
                </div>
            </div>))}
        </div>
    </div>
  )
}

export default Programs
