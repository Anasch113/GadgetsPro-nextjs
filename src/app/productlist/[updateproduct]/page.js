"use client"
import React, { useEffect, useState } from 'react'
import "../../style.css"
import Link from 'next/link'
import Footer from '@/Components/Footer'
const UpdateProduct = (props) => {
  const [name, setName] = useState('')
  const [Color, setColor] = useState('')
  const [Company, setCompany] = useState('')
  const [Price, setPrice] = useState('')
  const [Category, setCategory] = useState('')
 

useEffect(()=>{
getProductDetails()

}, [])

  const getProductDetails =  async()=>{

  
   const productId = props.params.updateproduct;
const response =  await fetch(`http://localhost:3000/api/products/${productId}`)

if(!response.ok){
    return new Error("Error while fetching")
}
const data = await response.json()

if(data.success){
    let result = data.result
    setName(result.name)
    setColor(result.Color)
    setCategory(result.Category)
    setCompany(result.Company)
    setPrice(result.Price)
}
  }

  const updateProducts =  async()=>{
    const productId = props.params.updateproduct;
    const response =  await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify({name, Color,Category,Company,Price})
    })
    const data = await response.json();
    if(data.result){
      alert("Product added successfully")
    }
  }
  return (

    <>
    <div className='upper-btns'>
    <Link href={'/productlist'}><button className='btn-2'>Product List</button></Link>
     <Link href={'/'}><button className='btn-2'>Home</button></Link>
    </div>
    
    <div className='container'>
       <h1> Update Product</h1>
      
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
        <button onClick={updateProducts} className='btn'>Update Product</button>

        </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default UpdateProduct;
