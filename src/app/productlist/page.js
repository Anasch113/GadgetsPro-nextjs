"use client"
import React from 'react'
import Link from 'next/link'
import "../style.css"
import { useEffect , useState} from 'react'
import DeleteProduct from '@/Components/DeleteProduct'



const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
    const fetchData = async ()=>{
        try {
            
            const response = await fetch("http://localhost:3000/api/products",{
                cache: "no-cache"
            });
            if(!response.ok){
                throw new Error("Error fetching data")
            }
            const data = await response.json();
            setProducts(data.result)
            
    
        } catch (error) {
            console.log("error fetching data", error)
        }
    }
    
    
    fetchData();
    }, [])

    
   
  return (
    <>
    <body className='product-list-body'>
        
   
    <div className="upper-btns">
    <Link href={'/addproduct'}><button className='btn-2'>Add Product</button></Link>
<Link href={'/'}><button className='btn-2'>Home</button></Link>
    </div>

    <div className='container-pl'>
        <div className="heding">
        <h1>Explore our product list for detailed </h1>
        <h1 className='h1-hed'>information about our <span>products.</span> </h1>
        </div>
       
        <table  className='table-box' border={1}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Color</td>
                    <td>Company</td>
                    <td>Price</td>
                    <td>Category</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
            {
                products.map((item)=>(
                   
                    <tr className='tr' key={item.name}>
                        <td>{item.name}</td>
                     <td>{item.Color} </td>
                     <td>{item.Company}</td>
                     <td>{item.Price}</td>
                     <td>{item.Category}</td>
                     <td  ><button className='btn-3'> <Link href={`/productlist/${item._id}`}>Update</Link>
                      </button> </td>
                     
                      <td> <DeleteProduct id={item._id}/> </td>

                    </tr>
                      
                     
                ))
            }
            </tbody>
        </table>
      
    </div>
    </body>
    </>
  )
}

export default ProductList

