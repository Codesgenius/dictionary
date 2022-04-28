import React from 'react'
import { useState, useEffect } from 'react'
import Main from '../components/Main'
import TopBar from '../components/TopBar'

const Landing = () => {
    // const [word, setWord] = useState("")
    const [meanings, setMeanings] = useState([])
    const [searchText, setSearchText] = useState("")
    const [suggestions, setSuggestions] = useState("")
    const [periodic, setPeriodic] = useState(0)

    const fetchSuggestions = (text) => {
        fetch(`https://api.datamuse.com/sug?s=${text}`)
            .then((data) => data.json())
            .then((res) => {
                setSuggestions(res)
            })
            .catch((err) => { console.log(err) })
    }

    const searchWord = () => {
        if (searchText === "") 
            return
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)
            .then((data) => data.json())
            .then((res) => {
                console.log(res)
                setMeanings(res)
                setSuggestions([])
            })
            .catch((err) => { console.log(err) })
    }

    const searchSuggestion = (text) => {
        if (text === "") 
            return
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
            .then((data) => data.json())
            .then((res) => {
                setSearchText(text)
                setMeanings(res)
                setSuggestions([])
                console.log(res)
            })
            .catch((err) => { console.log(err) })
    }

    const updateSearchText = (evt) => {
        let text = evt.target.value
        setSearchText(text)
        if (periodic) {
            clearTimeout(periodic)
        }

        //Clear suggestions
        if (text === "") {
            setSuggestions([])
            return
        }
        //store timeout
        setPeriodic(setTimeout(fetchSuggestions(text), 2000))
    }

    const clearWord = () => {
        setSearchText("")
        setSuggestions([])
    }

    const actions = {
        onCustomChange: updateSearchText,
        onSearchWord: searchWord,
        onClearWord: clearWord,
        onItemClick: searchSuggestion,
    }

    useEffect(() => {
        // fetch("https://api.dictionaryapi.dev/api/v2/entries/en/new")
        //     .then((data) => data.json())
        //     .then((res) => {
        //         console.log(res)
        //         console.log(res)
        //     })
    }, [])

    return (
        <div className='landing'>
            <TopBar {...actions} suggestions={suggestions} searchText={searchText} />
            {meanings.length > 0 && <Main data={meanings} onReferenceClick={searchSuggestion} />}
        </div>
    )
}

export default Landing