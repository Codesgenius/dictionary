import React from 'react'
import { useState } from 'react'
import Main from '../components/Main'
import NotFound from '../components/NotFound'
import Random from '../components/Random'
import TopBar from '../components/TopBar'

const Landing = () => {
    const [mode, setMode] = useState("random")
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
                setSuggestions([])

                if (res.message) {
                    setErrMsg(res)
                    setMode("error")
                }
                else {
                    setMeanings(res)
                    setMode("definition")
                }
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

        if (text === "") {
            setSuggestions([])
            return
        }
        //avoid api request after every change
        setPeriodic(setTimeout(() => {
            fetchSuggestions(text)
        }, 450))
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

    return (
        <div className='landing'>
            <TopBar {...actions} suggestions={suggestions} searchText={searchText} />
            {meanings.length > 0 && mode === "definition" && <Main data={meanings} onReferenceClick={searchSuggestion} />}
            {mode === "random" && <Random />}
            {mode === "error" && <NotFound data={errMsg} />}
        </div>
    )
}

export default Landing