import React, { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'
import {useSession, signIn, signOut} from "next-auth/react"

function Stories() {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll scrollbar-thin scrollbar-thumb-black rounded-sm border border-gray-200 bg-white p-6">

    {session && ( <Story img={session.user.images} username={session.user.username}/>)}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
