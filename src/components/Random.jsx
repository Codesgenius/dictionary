import React from 'react'
import {FaStar} from 'react-icons/fa'
import './css/random.css'

const Random = ({ data }) => {
    const { word, definition, pronunciation } = data

    return (
        <>
            <div className='random-title'>
                <h2><FaStar className='random-star'/><i>Random word</i></h2>
            </div>
            <div className="random-con">
                <div>
                    <h1>{word}</h1>
                    <span>pronounced as <i>{pronunciation}</i></span>
                    <p>{definition}</p>
                </div>
            </div>
        </>
    )
}

export default Random