import React from 'react'
import "../app/style.css"
import pic1 from "../assets/team-work.png"
import Image from 'next/image'
import Link from 'next/link'
const Services = () => {
  return (
    <div className='services-container'>
      <div className="left-container">
      <Image  src={pic1} width={400}>

</Image>


      </div>
      <div className="right-container">
<div className="hed">
    <h3>Best Results</h3>
    <h1>
    Explore the latest in technology, innovation, and cool gadgets that make our lives smarter and more convenient. We bring you in-depth details, reviews, and expert insights on a wide range of gadgets, from smartphones and wearables to smart home devices and gaming gear. 
    </h1>
</div>
<div className="btn-section">
<button className="btn-2"><Link className="btn-2" href={'/productlist'}>Explore</Link></button> 
</div>
      </div>
    </div>
  )
}

export default Services
