'use client';
import React, { useState }  from 'react'
import Link from 'next/link'
import { Auth } from 'aws-amplify';
import awsmobile from '../../aws-exports.js';
import {Amplify} from 'aws-amplify';

export async function confirmSignUp(email: string, code: string) {
  try {
    await Auth.confirmSignUp(email, code);
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

  export async function resendConfirmationCode(username : string) {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

export default function Code() {
    Amplify.configure(awsmobile);
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');

  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://plus.unsplash.com/premium_photo-1684330691489-2eb2620db612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-blur backdrop-filter backdrop-blur-lg">
        <div className="bg-[#ea7c5d] p-8 rounded shadow-lg bg-opacity-90">
            <h2 className="text-2xl font-bold mb-1">Enter Code</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input 
                            onChange={(e: any) => setEmail(e.target.value)}
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
                            placeholder="Enter your email"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="code" className="block text-gray-700 font-bold mb-2" >Verification Code</label>
                    <input 
                    onChange={(e: any) => setCode(e.target.value)}
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
                    placeholder="Enter your 6 digit code here"/> 
                </div>
            </form>
            <Link href='/login'>
                <button type='submit'  
                className="mb-2 bg-[#1d8050] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {confirmSignUp(email, code)}}    
                >Sign Up</button>
            </Link>
        </div>
    </div>
  )
}
