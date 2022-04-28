import React from 'react'
import { useState, useEffect } from 'react'
import Main from '../components/Main'
import NotFound from '../components/NotFound'
import Random from '../components/Random'
import TopBar from '../components/TopBar'

const Landing = () => {
    const [word, setWord] = useState({})
    const [errMsg, setErrMsg] = useState("")
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

    const searchSuggestion = (text) => {
        if (text === "")
            return
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
            .then((data) => data.json())
            .then((res) => {
                setSearchText(text)
                setWord({})
                setSuggestions([])

                if(res.message){
                    setErrMsg(res)
                    return
                }
                setMeanings(res)
                console.log(res)
            })
            .catch((err) => { console.log(err) })
    }

    
    const searchWord = () => {
        searchSuggestion(searchText)
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
        fetch("https://random-words-api.vercel.app/word")
            .then((data) => data.json())
            .then((res) => {
                setWord(res[0])
            })
    }, [])

    return (
        <div className='landing'>
            <TopBar {...actions} suggestions={suggestions} searchText={searchText} />
            {meanings.length > 0 && <Main data={meanings} onReferenceClick={searchSuggestion} />}
            {meanings.length === 0 && <Random data={word} />}
            {errMsg.length > 0 && <NotFound data={errMsg}/>}
        </div>
    )
}

export default Landing