import mongoose from "mongoose";
import { connectionstr } from "@/dbconnection/db";
import { NextResponse } from "next/server";
import { Product } from "@/dbconnection/model/product";

export async function GET(){
  let data = [];
  
  try {
    await mongoose.connect(connectionstr)
     data = await Product.find();
  } catch (error) {
   
    return new NextResponse(JSON.stringify({result: "error"}), {status: 500})
    
  }
  return new NextResponse(JSON.stringify({result: data}), {status: 200})
}

// Making post api to save data in mongodb databse
export async function POST(request){

  const payload =  await request.json();
  await mongoose.connect(connectionstr);
  let product = new Product(payload)
  console.log(payload)
  const result = await product.save();
  return new NextResponse(JSON.stringify({result}))
}





