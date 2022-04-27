import React from 'react'
import Definition from './Definition'
import LinkedWords from './LinkedWords'

const Meaning = ({ meaning }) => {
    const { partOfSpeech, definitions, synonyms, antonyms } = meaning
    return (
        <div className='definition'>
            <h2>{partOfSpeech}</h2>
            <ol>
                {definitions.map((item, index) => {
                    return <Definition key={index} definition={item.definition} example={item.example} />
                })}
            </ol>

            {synonyms.length > 0 && <LinkedWords data={synonyms} name="Synonyms" />}
            {antonyms.length > 0 && <LinkedWords data={antonyms} name="Antonyms" />}
        </div>
    )
}

export default Meaning