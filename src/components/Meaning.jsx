import React from 'react'
import './css/meaning.css'

const Definition = ({ definition, example }) => {
    return (
        <li>
            <p>{definition}</p>
            <blockquote><i>{example}</i></blockquote>
        </li>
    )
}

const LinkedWords = ({ data, name, onReferenceClick }) => {
    const uniqueData = [...new Set(data)]

    return (
        <div className='linked-word-con'>
            <span><strong>{name} : </strong></span>
            {uniqueData.map((item, index) => {
                return (
                    <span key={index}>
                        <span className='ref-item' onClick={() => { onReferenceClick(item) }}>{item}</span>
                        {index === data.length - 1 ? "" : ", "}
                    </span>
                )
            })}
        </div>
    )
}

const Meaning = ({ meaning, onReferenceClick }) => {
    const { partOfSpeech, definitions, synonyms, antonyms } = meaning
    return (
        <div className='definition'>
            <h2>{partOfSpeech}</h2>
            <ol>
                {definitions.map((item, index) => {
                    return <Definition key={index} definition={item.definition} example={item.example} />
                })}
            </ol>

            {synonyms.length > 0 && <LinkedWords data={synonyms} onReferenceClick={onReferenceClick} name="Synonyms" />}
            {antonyms.length > 0 && <LinkedWords data={antonyms} onReferenceClick={onReferenceClick} name="Antonyms" />}
        </div>
    )
}

export default Meaning