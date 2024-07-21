"use client"

import React, {useState, useEffect} from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function PokeResult() {

    const params = useParams();
    console.log(params)
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] =useState(false);

    console.log(pokeData)

    const fetchPokeData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeName}`)
            const data = await response.json();
            setPokeData(data);
            setLoading(false);
        } catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPokeData();
    }, [])
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
                <h3 className='text-3xl'>{pokeData.name}</h3>
                <Image src={pokeData.sprites?.other.home.front_default} width={300} height={300} alt={pokeData.nqme}/>
                <div className='mt-5'>
                    <p className='my-3'>Weight: {pokeData.weight}</p>
                    <p className='my-3'>
                        Abilities: {""}
                        {pokeData.abilities?.map(val=> 
                            <span key={val.ability.name} className='bg-gray-500 text-white px-3 py-1 rounded-md'>{val.ability.name}</span>
                        )}
                    </p>
                    <p className='my-3'>
                        Types: {""}
                        {pokeData.types?.map(val=> 
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

export default PokeResult