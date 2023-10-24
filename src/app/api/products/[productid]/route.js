import { connectionstr } from "@/dbconnection/db";
import { Product } from "@/dbconnection/model/product";
import { NextResponse } from "next/server"
import mongoose from "mongoose";

export async function PUT(request, content){
    //Making connection to database
    mongoose.connect(connectionstr)

    // Accessing data in payload from body request and converting it to json
    const payload = await request.json();

    //Accessing the id of product by params 
  const productId = content.params.productid;

  //Making the accessed id into mongodb form id
  const filter = {_id: productId}

     console.log(payload);

    // Accessing the product and update it in database by one of the mongodb methods
     const result = await Product.findOneAndUpdate(filter, payload)

     //Returning the response as usual in all api
     return new NextResponse(JSON.stringify({result, success: true}))
}




// Making GET api to fetch single product details 

export async function GET(request, content){
    //Making connection to database
    mongoose.connect(connectionstr)

    
    //Accessing the id of product by params 
  const productId = content.params.productid;

  //Making the accessed id into mongodb form id
  const record = {_id: productId}



    // Accessing the single product details by its id
     const result = await Product.findById(record)

     //Returning the response as usual in all api
     return new NextResponse(JSON.stringify({result, success: true}))
}


// Making DELETE Api to delete product in database

export async function DELETE(request, content){
  const productId = content.params.productid;
  const record = {_id:productId};
  await mongoose.connect(connectionstr);
  const result  = await Product.deleteOne(record);
   return new NextResponse(JSON.stringify({result, success:true}))

}