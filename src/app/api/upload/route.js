import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'

export async function POST(req){
    const data =  await req.formData();
    const file = data.get('file');
    if(!file){
        return new NextResponse(JSON.stringify("message: Error during file uploading"));
    }
const byteData = await file.arrayBuffer();
const buffer = Buffer.from(byteData);
const path = `./public/${file}`
await writeFile(path, buffer);

return new NextResponse(JSON.stringify("Message: File uploaded successfully"))
}