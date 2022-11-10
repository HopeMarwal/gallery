import React from 'react'

export default function Image({ title, url }) {
  return (
    <div className='image'>
      <img className='img' src={url} alt={title} />
    </div>
  )
}
