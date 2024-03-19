'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports.js';
import {Amplify} from 'aws-amplify';


export async function signIn( email: string, password: string ) {
  try {
    const user = await Auth.signIn(email, password);
  } catch (error) {
    console.log('error signing in', error);
  }
}
export default function Login() {
  Amplify.configure(awsmobile);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://images.unsplash.com/photo-1518384401463-d3876163c195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] ">
      <div className="bg-[#ea7c5d] p-8 rounded shadow-lg bg-opacity-95">
        <h2 className="text-2xl font-bold mb-4">Login!</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password" />
          </div>
          <Link href="/">
            <button 
              type='submit' 
              className="mb-2 bg-[#1d8050] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => {signIn(email, password)}}
              >Log In</button>
          </Link>
          <div className='flex justify-between'>
            <h3 className=' mt-2 text-sm'>Are you new here?</h3>
            <Link href='/sign' className='mt-2 text-sm text-[#444444] font-bold'>Sign Up!</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
