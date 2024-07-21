"use client"

import React, {useState, useEffect}from 'react'
import { useRouter } from 'next/navigation'

function Header() {

  const router = useRouter();
  const [pokeName, setPokeName] = useState("");

  // function รับค่า
  const handleInput = (e) => {
    setPokeName(e.target.value);
  }
  //function ส่งค่า
  const handleForm =(e) => {
    e.preventDefault();

    router.push(`/pokesearch/${pokeName}`)
    console.log(pokeName)
  }

  return (
    <header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[400] flex justify-center items-center'>
        <div className='text-center py-10'>
            <h1 className='text-white text-5xl'>NextJS Pokemon Finder App</h1>
            <p className='text-white text-2xl'>Find your favourite Pokemon</p>
            <form onSubmit={handleForm} action="" className='flex mt-2'>
                <input 
                    type='text'
                    className='w-full rounded-md border-gray-300 px-3 py-2 text-gray-700 shadow-md'
                    placeholder='Pokemon Name...'
                    onChange={handleInput}

                />
                <button className='inline-flex items-center mx-2 px-4 py-2 rounded-md bg-pink-400 text-white shadow-md'
                        type='submit'>Search</button>
            </form>
        </div>
    </header>
  )
}

export default Header