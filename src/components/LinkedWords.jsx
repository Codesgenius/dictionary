import React from 'react'

// const LinkedWordsItem = () => {
//     return (<span key={index}><span className='ref-item' onClick={() => { }}>{item}</span> {index === data.length ? "" : ", "}</span>)
// }

const LinkedWords = ({ data, name }) => {
    return (
        <div>
            <span><strong>{name} : </strong></span>
            {data.map((item, index) => {
                return (<span key={index}><span className='ref-item' onClick={() => { }}>{item}</span> {index === data.length - 1 ? "" : ", "}</span>)
            })}
        </div>
    )
}

export default LinkedWords