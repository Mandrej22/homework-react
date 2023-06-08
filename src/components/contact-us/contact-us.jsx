import React from 'react'
import '../contact-us/contact-us.css'
import parrot from "../../assets/pngs/Group 1052.png"

function ContactUs() {
  return (
    <div className='contact-us'>
      <img src={parrot} alt="parrot" className='parrot'/>
      <h4 className='contact-us-title'>Like what you see?</h4>
      <p className='contact-us-description'>Let's talk about it.</p>
      <button className='contact-us-btn'>contact us</button>
    </div>
  )
}

export default ContactUs