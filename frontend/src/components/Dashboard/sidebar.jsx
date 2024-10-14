import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <nav className="w-60   bg-gray-800 p-6 text-white flex flex-col items-center ">
    <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
    <ul>
      <li className="mb-4"><Link href="/">Home</Link></li>
      <li className="mb-4"><Link href="/dashboard">Booking</Link></li>
      <li className="mb-4"><Link href="/dashboard/blog">Blog</Link></li>
      <li className="mb-4"><Link href="/dashboard/newPost">New Post</Link></li>
      <li className="mb-4"><Link href="/dashboard/gallery">Gallery</Link></li>
      <li className="mb-4"><Link href="/dashboard/uploadGallery">Upload Gallery</Link></li>
    </ul>
  </nav>
  )
}

export  default Sidebar