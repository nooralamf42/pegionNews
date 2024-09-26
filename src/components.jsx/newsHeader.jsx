import React from 'react'

export default function NewsHeader({text, className}) {
  return (
    <h1 className={`~text-3xl/5xl relative w-fit newsreader-600 before:content-[''] before:-translate-y-3 before:inset-0 before:h-2 before:w-1/2 before:absolute before:bg-primary ${className}`}>{text}</h1>
  )
}
