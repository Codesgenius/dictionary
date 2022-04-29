import React from 'react'
import { useWord } from '../hooks/useWord'

const SuggestionItem = ({ suggestion }) => {
    const { word } = suggestion
    const { searchSuggestion } = useWord()

    return (
        <div className='suggestion-item' onClick={() => { searchSuggestion(word) }}>
            <div className='suggestion-text'><strong>{word}</strong></div>
        </div>
    )
}

export default SuggestionItem