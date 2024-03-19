'use client'
import React, { useState } from 'react'
import { Auth } from 'aws-amplify';
import { Hub } from 'aws-amplify';
import awsmobile from '../../aws-exports.js';
import {Amplify} from 'aws-amplify';


export async function signUp(username: any, password: any, email: any, phone_number: any) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email: username, // optional
        phone_number: '+15555555555', // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}


export async function resendConfirmationCode(username:string) {
  try {
    await Auth.resendSignUp(username);
    console.log('code resent successfully');
  } catch (err) {
    console.log('error resending code: ', err);
  }
}


function listenToAutoSignInEvent() {
  Hub.listen('auth', ({ payload }) => {
    const { event } = payload;
    if (event === 'autoSignIn') {
      const user = payload.data;
      // assign user
    } else if (event === 'autoSignIn_failure') {
      // redirect to sign in page
    }
  })
}

export default function SignUp({handleSetVerification}: any) {
    Amplify.configure(awsmobile);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tel, setTel] = useState('');


    


  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://plus.unsplash.com/premium_photo-1684330691489-2eb2620db612?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-blur backdrop-filter backdrop-blur-lg">
        <div className="bg-[#ea7c5d] p-8 rounded shadow-lg bg-opacity-90">
            <h2 className="text-2xl font-bold mb-1">Sign Up</h2>
            <div className='flex '>
                <p className=' mt-2 text-sm'>Create an account or</p>
                <a href="/login" className='mt-2 text-sm text-[#444444] font-bold ml-1 mb-3'>log in</a>
            </div>
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
                    <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                    <input 
                        onChange={(e: any) => setTel(e.target.value)}
                        type="tel"
                        id="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
                        placeholder="Phone Number"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2" >Password</label>
                    <input 
                    onChange={(e: any) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" 
                    placeholder="Password"/> 
                </div>
            </form>
                <button type='submit'  
                className="mb-2 bg-[#1d8050] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {signUp(email, password, email, tel); handleSetVerification()}}
                >Sign Up</button>
        </div>
    </div>
  )
}
