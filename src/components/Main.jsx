import React from 'react'
import { GiSpeaker } from 'react-icons/gi'
import { GoTriangleDown } from 'react-icons/go'
import Meaning from './Meaning'
import './css/main.css'
import { useWord } from '../hooks/useWord'

const Main = () => {
    const { meanings, searchSuggestion } = useWord()

    if (meanings.length <= 0) {
        return (<div style={{ textAlign: "center" }}><h2>Loading...</h2></div>)
    }

    const audio = new Audio(meanings[0].phonetics[0]?.audio)
    return (
        <div className='main'>
            <div className="word-top">
                <h1 className='word-text'>{meanings[0].word}</h1>
                <div className='phonetic-con'>
                    <div className="word-phonetic">{meanings[0].phonetic}</div>
                    <div className="word-play">
                        {meanings[0].phonetics[0] && <GiSpeaker onClick={() => {
                            audio.play()
                        }} />}
                    </div>
                </div>
            </div>

            {meanings.map((itemData, index) => {
                return (
                    <div key={index}>
                        <span style={{ fontWeight: "bold" }}>[{index + 1}] <GoTriangleDown /></span>
                        {itemData.meanings.map((item, index) => {
                            return <Meaning key={index} meaning={item} onReferenceClick={searchSuggestion} />
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Main