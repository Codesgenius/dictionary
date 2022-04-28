import React from 'react'
import './css/notfound.css'

const NotFound = ({data}) => {
    const {message, resolution, title} = data
  return (
    <div className='not-found'>
        <h1>{title}</h1>
        <h3>{message}</h3>
        <p><i>{resolution}</i></p>
    </div>
  )
}

export default NotFound