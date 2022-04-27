import React from 'react'
import SuggestionItem from './SuggestionItem'
import './css/suggestion.css'

const Suggestions = ({ suggestions, onItemClick }) => {

    return (
        <div className='suggestion-con'>
            <div className="suggestion-inner">
                {suggestions.map((item, index) => {
                    return <SuggestionItem key={index} suggestion={item} onCustomClick={onItemClick} />
                })}
            </div>
        </div>
    )
}

export default Suggestions