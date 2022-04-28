import React from 'react'
import { GiSpeaker } from 'react-icons/gi'
import Meaning from './Meaning'
import './css/main.css'

const Main = ({ data, onReferenceClick }) => {
    const audioSource = data.phonetics[0].audio
    const audio = new Audio(audioSource)

    return (
        <div className='main'>
            <div className="word-top">
                <h1 className='word-text'>{data.word}</h1>
                <div className='phonetic-con'>
                    <div className="word-phonetic">{data.phonetic}</div>
                    <div className="word-play">
                        <GiSpeaker onClick={() => {
                            audio.play()
                        }} />
                    </div>
                </div>
            </div>

            {data.meanings.map((item, index) => {
                return <Meaning key={index} meaning={item} onReferenceClick={onReferenceClick} />
            })}
        </div>
    )
}

export default Main