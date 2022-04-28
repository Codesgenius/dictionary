import React, { useEffect, useRef } from 'react'
import Suggestions from './Suggestions'
import { FaTimes, FaSearch } from 'react-icons/fa'
import './css/topbar.css'

const TopBar = ({ searchText, onCustomChange, onSearchWord, onClearWord, suggestions, onItemClick }) => {
    const inputRef = useRef(null)
    const onConfirm = (evt) => {
        if (evt.key === "Enter") {
            onSearchWord()
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div className='topbar'>
            <div className="app-image"></div>

            <div className="search-con">
                <div className='search-inner'>
                    <div className='input-box'>
                        <input type="text" ref={inputRef} value={searchText} onKeyUp={onConfirm} onChange={onCustomChange} />
                    </div>
                    <div className="search-icon search-cancel">
                        {searchText !== "" && <FaTimes onClick={onClearWord} />}
                    </div>
                    <div className="search-icon search-button">
                        <FaSearch onClick={onSearchWord} />
                    </div>
                </div>

                {suggestions.length !== 0 && <Suggestions suggestions={suggestions} onItemClick={onItemClick} />}
            </div>
        </div>
    )
}

export default TopBar