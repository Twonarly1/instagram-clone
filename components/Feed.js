import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'
import {useSession} from "next-auth/react"

function Feed() {
    const { data: session } = useSession();

  return (
    <main className={`xl:max-w-6xl mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:grid-cols-3 ${!session && "!grid-cols-1 !max-w-3xl"}`}>
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

    {session && (  
    <section className='hidden xl:inline-grid md:col-span-1'>
      <div className='fixed top-20'> 
         <MiniProfile />    
         <Suggestions />
      </div>

      </section>)}
    
    </main>
  )
}

export default Feed
