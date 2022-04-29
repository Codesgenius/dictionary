import React from 'react'
import SuggestionItem from './SuggestionItem'
import './css/suggestion.css'
import { useWord } from '../hooks/useWord'

const Suggestions = () => {
    const { suggestions } = useWord()
    return (
        <div className='suggestion-con'>
            <div className="suggestion-inner">
                {suggestions.map((item, index) => {
                    return <SuggestionItem key={index} suggestion={item} />
                })}
            </div>
        </div>
    )
}

export default Suggestions