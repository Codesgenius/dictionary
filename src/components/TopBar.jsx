import React, { useEffect, useRef } from 'react'
import Suggestions from './Suggestions'
import { FaTimes, FaSearch } from 'react-icons/fa'
import './css/topbar.css'
import { useWord } from '../hooks/useWord'

const TopBar = () => {
    const { updateSearchText, searchWord, clearWord, suggestions, searchText } = useWord()
    const inputRef = useRef(null)
    const onConfirm = (evt) => {
        if (evt.key === "Enter") {
            searchWord()
        }
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    return (
        <div className='topbar'>
            <div className="app-image"></div>

            <div className="search-con">
                <div className='search-inner'>
                    <div className='input-box'>
                        <input type="text" ref={inputRef} value={searchText} onKeyUp={onConfirm} onChange={updateSearchText} />
                    </div>
                    <div className="search-icon search-cancel">
                        {searchText !== "" && <FaTimes onClick={clearWord} />}
                    </div>
                    <div className="search-icon search-button">
                        <FaSearch onClick={searchWord} />
                    </div>
                </div>

                {suggestions.length !== 0 && <Suggestions />}
            </div>
        </div>
    )
}

export default TopBar