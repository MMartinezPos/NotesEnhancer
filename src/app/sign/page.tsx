'use client'
import SignUp from "./sign"
import React, { useState } from 'react'
import Code from "./code"

export default function Home() {
  
  const [needsVerification, setNeedsVerification] = useState(false);
  function handleSetVerification() {
    setNeedsVerification(true);
  }

  return (
    <div>
      {!needsVerification ? <SignUp handleSetVerification = {handleSetVerification} /> : <Code/> }
    </div>
  )
}
