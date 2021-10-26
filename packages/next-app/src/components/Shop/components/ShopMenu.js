import React from 'react'

export default function ShopMenu() {
  return (
            <div className="grid grid-cols-1 text-gold-dark w-64 min-h-screen bg-brown ">
                <ul>
                    <li className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">Food</li>
                    <li className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">Art</li>
                    <li className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">Coming Soon</li>
                </ul>
            </div>
  )
}



