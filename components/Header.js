import React from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Connect from './Connect'
import {useSession, signIn, signOut} from "next-auth/react"
import { useRouter} from "next/router"
import { useRecoilState } from "recoil"
import {modalState} from "../atoms/modalAtom"

function Header() {
 const { data: session } = useSession();
 const [open, setOpen] = useRecoilState(modalState);
 const router = useRouter();

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* Left */}
        <div onClick={() => router.push('/')} className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div onClick={() => router.push('/')} className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle */}
        <div className="max-w-xs">
          <div className="bg-red relative mt-1 rounded-md p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full  rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          {' '}
          <HomeIcon onClick={() => router.push('/')} className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />

          {session ? ( <><div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
            </div>
        </div>
        <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
        <UserGroupIcon className="navBtn" />
        <HeartIcon className="navBtn" />

        <img
            onClick={signOut}
            src={session?.user?.image}
            alt=""
            className='h-10 rounded-full cursor-pointer' />
        </>
        ) : ( 
        <button onClick={signIn}>Sign in</button>
          )}
         
         <Connect />
        </div>
      </div>
    </div>
  )
}

export default Header
