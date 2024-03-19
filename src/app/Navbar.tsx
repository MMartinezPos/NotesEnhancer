import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <div>
      <nav className="bg-[#ea7c5d] fixed w-[100%] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 pt-5">
            <div className="flex items-center justify-between">
              <div className="">
                <h1>To Do App</h1>
              </div>
              <div className="">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="" >Home</Link>
                  <Link href="/list" className="" >My Lists</Link>
                  {/* Add Error Handling if clicked before logged in */}
                  <Link href="/login" className="" >Login</Link>
                </div>
              </div>
          </div>
        </div>
      </nav>
      <div className='pt-16'>
        
      </div>
    </div>
  )
}
