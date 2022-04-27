import React from 'react'
import Meaning from './Meaning'
import './css/main.css'

const Main = ({ data }) => {
    return (
        <div className='main'>
            <div className="word-top">
                <h1 className='word-text'>{data.word}</h1>
                <div>
                    <span className="word-phonetic">{data.phonetic}</span>
                    <span>
                        <audio preload="none">
                            <source src={data.phonetics[0].audio} type="mp3" />
                        </audio>
                    </span>
                </div>
            </div>

            {data.meanings.map((item, index) => {
                return <Meaning key={index} meaning={item} />
            })}
        </div>
    )
}

export default Main