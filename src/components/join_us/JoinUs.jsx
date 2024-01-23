import React from 'react'
import './JoinUs.css'
const JoinUs = () => {
  return (
    <div className='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>ready to</span><span>&nbsp;</span><span>level up</span>
            </div>
            <div>
                <span>your body </span><span>&nbsp;</span><span className='stroke-text'>with us</span>
            </div>
        </div>
      <div className="right-j">
        <form action="" className='email-container'>
            <input type="email" name='email'placeholder='Enter your email'/>
            <button className='btn'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default JoinUs
