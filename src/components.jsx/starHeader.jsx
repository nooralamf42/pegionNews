import React from 'react'
import { AiFillStar } from 'react-icons/ai'
export default function StarHeader({title='Latest News', className=""}) {
  return (
    <div className={`flex items-center gap-1 w-fit bg-primary font-bold text-sm px-2 py-1 group ${className}`}><AiFillStar size={15} className="group-hover:rotate-180 duration-300" color="black"/> <p className="whitespace-nowrap">{title}</p></div>
  )
}
