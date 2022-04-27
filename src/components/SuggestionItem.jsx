import React from 'react'

const SuggestionItem = ({ onCustomClick, suggestion }) => {
    const { word } = suggestion

    return (
        <div className='suggestion-item' onClick={() => {onCustomClick(word)}}>
            <div className='suggestion-text'><strong>{word}</strong></div>
        </div>
    )
}

export default SuggestionItem