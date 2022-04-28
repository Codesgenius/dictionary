import React from 'react'
import { GiSpeaker } from 'react-icons/gi'
import { GoTriangleDown } from 'react-icons/go'
import Meaning from './Meaning'
import './css/main.css'

const Main = ({ data, onReferenceClick }) => {
    const audio = new Audio(data[0].phonetics[0]?.audio)

    return (
        <div className='main'>
            <div className="word-top">
                <h1 className='word-text'>{data[0].word}</h1>
                <div className='phonetic-con'>
                    <div className="word-phonetic">{data[0].phonetic}</div>
                    <div className="word-play">
                        {data[0].phonetics[0] && <GiSpeaker onClick={() => {
                            audio.addEventListener('canplaythrough', () => {
                                audio.play()
                            })
                        }} />}
                    </div>
                </div>
            </div>

            {data.map((itemData, index) => {
                return (
                    <div key={index}>
                        <span style={{ fontWeight: "bold" }}>[{index + 1}] <GoTriangleDown /></span>
                        {itemData.meanings.map((item, index) => {
                            return <Meaning key={index} meaning={item} onReferenceClick={onReferenceClick} />
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Main