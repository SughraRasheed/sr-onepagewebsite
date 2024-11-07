'use client';
import React from 'react'

const header = () => {
  return (
    <div>
        <nav>
            <ul className=" flex justify-end px-20 py-11 space-x-9 text-2xl lg:w-[1200px] lg:h-[100px] text-green-800 text-decoration-line : underline">
                <li ><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default header