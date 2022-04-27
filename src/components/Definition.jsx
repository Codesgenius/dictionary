import React from 'react'

const Definition = ({ definition, example }) => {
    return (
        <li>
            <p>{definition}</p>
            <blockquote><i>{example}</i></blockquote>
        </li>
    )
}

export default Definition