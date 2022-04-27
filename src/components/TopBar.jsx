import React from 'react'
import Suggestions from './Suggestions'
import { FaTimes, FaSearch } from 'react-icons/fa'
import './css/topbar.css'
import logo from '../asset/imgs/logo.jpg'

const TopBar = ({ searchText, onCustomChange, onSearchWord, onClearWord, suggestions, onItemClick }) => {
    return (
        <div className='topbar'>
            <div className="app-image">
                <img src={logo} alt="" />
            </div>

            <div className="search-con">
                <div className='search-inner'>
                    <div className='input-box'><input type="text" value={searchText} onChange={onCustomChange} /></div>
                    <div className="search-icon">
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