import React from 'react'
import "../app/style.css"
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
    <nav className="mainnav">
    <ul>
     
    <Link href='/'>  <li className="li"  >Home</li></Link>
    <Link href='/productlist'>   <li className="li" >Products</li></Link>
    <Link href='/addproduct'><li className="li" >Add Product</li></Link>
    </ul>
    </nav>
 </div>
  )
}

export default Navbar
