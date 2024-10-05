import { FaFrownOpen } from "react-icons/fa"; 
import { CgSmileNone } from "react-icons/cg"; 
import React from 'react'

function NothingFound({text="No Results Found"}) {
  return (
    <section className='my-container'>
        <div className="flex items-center justify-center gap-4 ~text-3xl/5xl h-[50vh]">
        <h1 className="text-red-500 font-bold">{text}</h1>
        <FaFrownOpen color="red"/>
        </div>
    </section>
  )
}

export default NothingFound