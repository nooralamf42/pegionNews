import React from 'react'

export default function NewsHeader({text, className=""}) {
  return (
    <h1 className={`~text-3xl/5xl relative w-fit newsreader-600 ${className}`}>{text}</h1>
  )
}
