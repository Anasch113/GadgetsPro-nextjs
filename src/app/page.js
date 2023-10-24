"use client"
import "./style.css"
import Link from "next/link"
import pic1 from "../assets/bg5.png"

import Image from "next/image"
import Navbar from "@/Components/Navbar"
import Services from "@/Components/Services"
import Footer from "@/Components/Footer"

export default function Home() {
  // const [file, setFile] = useState()
  //   const imageUpload =  async(e)=>{
  //       e.preventDefault()
       
  //       const data = new FormData();
  //      data.set('file', file);
  //      let result = await fetch("http://localhost:3000/api/uploadaa", {
  //       method: "POST",
  //       body:data
  //      })
       
  //      console.log(result)
  //      if(result){
  //       alert("file uploaded")
  //      }
  //   }
  return (
    <>
    <Navbar/>
   <div className="container">

   <div className="main-banner">

   
    <div className="box">
      <div className="box-hed">
      <h1>Get The Latest Tech & Gadgets <span>Information</span>  Here </h1>
     <p>Providing you the best details with 100% market trends</p>
      </div>
  

     <div className="btn-section">
    <button className="btn-2"><Link className="btn-2" href={'/addproduct'}>Add Product</Link></button> 
   <button className="btn-2"><Link className="btn-2" href={'/productlist'}>Product List</Link></button> 
    </div>

    </div>

<div className="right-box">
<Image  src={pic1} width={800}
>

</Image>

</div>
   
  

   {/* <h1>Image Upload in Nextjs</h1>
<form onSubmit={imageUpload}>

<input 

type="file"
 name='file' 
 onChange={(e) => setFile(e.target.files?.[0])}
 
 />
<button>Upload Image</button>
</form> */}
</div>
   </div>
   <Services/>
   <Footer/>
   </>
  )
}
