import React from 'react'
import { useAccount, useConnect } from 'wagmi'
import Connect from './Connect'
import {useSession, signIn, signOut} from "next-auth/react"

function MiniProfile() {
  const [{ data, error }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })
  const { data: session } = useSession();

  return (
  <> 
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img src={session?.user?.image} alt="" className='rounded-full border p-[2px] w-16 h-16 '/>
       <div className='flex-1 mx-4 '>
        <h2 className='font-bold'>{session?.user?.username}</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Proof</h3>
      </div>
      <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign Out</button>
     <Connect />
    </div>
  </>
  )
}

export default MiniProfile;