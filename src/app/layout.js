// import './globals.css'
import Footer from '@/Components/Footer'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gadgets Pro | Get latest gadegts info here ',
  description: 'Get latest gadegts info here',
}

export default function RootLayout({ children }) {
  return (
    <>
    <head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
   
    </html>
    </>
  )
}
