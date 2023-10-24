"use client"
import React, { useState } from 'react'
import "../style.css"
import Footer from '@/Components/Footer'
import Link from 'next/link'
const AddProduct = () => {
  const [name, setName] = useState('')
  const [Color, setColor] = useState('')
  const [Company, setCompany] = useState('')
  const [Price, setPrice] = useState('')
  const [Category, setCategory] = useState('')
 
  const handleSubmit = async (e)=>{
    e.preventDefault();
console.log(name, Color, Company)

let result = await fetch("http://localhost:3000/api/products",{
  method: "POST",
  body: JSON.stringify({name, Color, Company, Category, Price})
})
result = await result.json();
console.log(result)
if(result){
  alert("Product added Successfully")
}
  }
  return (
    <>
    <body className='add-product-body'>
      
   
    <div className='upper-btns'>
    <Link href={'/productlist'}><button className='btn-2'>Product List</button></Link>
     <Link href={'/'}><button className='btn-2'>Home</button></Link>
    </div>
    
    <div className='container-ap'>
       <h1> Add Product <span id='here'>Here</span></h1>
      
     <form className='form'>
<div className='row'>


        <div className='inputs'>
         <label htmlFor="">Name</label>
         <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter Product Name' />
        </div>

        <div className='inputs'>
         <label htmlFor="">Color</label>
         <input value={Color} onChange={(e)=> setColor(e.target.value)} type="text" placeholder='Enter Product Color' />
        </div>

        <div className='inputs'>
         <label htmlFor="">Company</label>
         <input value={Company} onChange={(e)=> setCompany(e.target.value)} type="text" placeholder='Enter Product Company' />
        </div>

        <div className='inputs'>
         <label htmlFor="">Price</label>
         <input value={Price} onChange={(e)=> setPrice(e.target.value)} type="text" placeholder='Enter Product Price' />
        </div>

        <div className='inputs'>
         <label htmlFor="">Category</label>
         <input value={Category} onChange={(e)=> setCategory(e.target.value)} type="text" placeholder='Enter Product Category' />
        </div>
        <button onClick={handleSubmit} className='btn'>Add Product</button>

        </div>
      </form>
    </div>



   


    </body>
    <Footer/>
    </>
  )
}

export default AddProduct;
