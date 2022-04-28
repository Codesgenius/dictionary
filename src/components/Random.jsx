import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useQuery } from 'react-query'
import './css/random.css'

const Random = () => {
    const { data, isLoading, error } = useQuery("", async () => {
        const res = await fetch("https://random-words-api.vercel.app/word");
        return res.json();
    }, {
        keepPreviousData: true,
        refetchOnWindowFocus: true,
    })

    if (error) return (<h2 style={{ textAlign: "center" }}>An error has occurred</h2>)

    if (isLoading) return (<h2 style={{ textAlign: "center" }}>Loading....</h2>)

    const { word, definition, pronunciation } = data[0]
    return (
        <>
            <div className='random-title'>
                <h2><FaStar className='random-star' /><i>Random word</i></h2>
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