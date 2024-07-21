"use client"

import React, {useState, useEffect} from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function PokeInfo() {

    const params = useParams();
    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState([false]);

    useEffect(() => {
        setLoading(true);
        const fetchPokeDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
                const pokeDate = await response.json();
                setPoke(pokeDate)
                
            } catch(error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchPokeDetails();
    }, [])

    console.log(poke)

  return (
    <div className='p-24'>
       {/* <Link href='/' className="bg-blue-500 text-white p-3 rounded-md">Go back</Link> */}
       <Link href="/" className='bg-blue-500 text-white rounded-md'>Go back</Link>
       <div className='flex justify-center items-center mt-10 text-center'>
        <div className='shadow-md p-10 rounded-md'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                <h3 className='text-3xl'>{poke.name}</h3>
                <Image src={poke.sprites?.other.home.front_default} width={300} height={300} alt={poke.nqme}/>
                <div className='mt-5'>
                    <p className='my-3'>Weight: {poke.weight}</p>
                    <p className='my-3'>
                        Abilities: {""}
                        {poke.abilities?.map(val=> 
                            <span key={val.ability.name} className='bg-gray-500 text-white px-3 py-1 rounded-md'>{val.ability.name}</span>
                        )}
                    </p>
                    <p className='my-3'>
                        Types: {""}
                        {poke.types?.map(val=> 
                            <span key={val.type.name} className='bg-gray-500 text-white px-3 py-1 rounded-md'>{val.type.name}</span>
                        )}
                    </p>
                </div>
                </>
            )}
        </div>
       </div>

    </div>
  )
}

export default PokeInfo