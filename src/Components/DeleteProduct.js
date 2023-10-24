"use client"
import React from 'react'

import "../app/style.css"


const DeleteProduct =  (props) => {

    const handleDelete = async()=>{
        const id = props.id;
    const result = await fetch(`http://localhost:3000/api/products/${id}`,{
        method: "DELETE"
    });
    const data = await result.json();
    if(data.success){
      
       
        alert("Product deleted successfully");
        router.reload()

    }
    else("Product not deleted")
    
    }
    return (
        
            <button onClick={handleDelete}  id='btn-3-s' className='btn-3'> Delete </button>
           
        
    )
}

export default DeleteProduct
