import React from 'react'
import './Plans.css'
import WhiteTick from'../../assets/whiteTick.png'
import {plansData} from '../../data/plansData'
const Plans = () => {
  return (
    <div className='plans'>
      <div className="blur plans-blur-l"></div>
      <div className="blur plans-blur-r"></div>
      <div className="plans-header">
        <span className='stroke-text'>Ready to start</span>
        <span>Your journey</span>
        <span className='stroke-text'>now with us</span>
      </div>
      <div className="plans-cards">
        {plansData.map((plan)=>(
            <div className='plan'>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>
                <div className="features">
                    {plan.features.map((feature,i)=>(
                        <div className="feature">
                            <img src={WhiteTick} alt="" />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
                <span>See more benefits -></span>
                <button className='btn'>Join Now</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
