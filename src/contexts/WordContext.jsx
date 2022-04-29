import React, { useState } from 'react';

export const WordContext = React.createContext()

export const WordProvider = ({ children }) => {
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
            .catch((err) => { setSuggestions([]); })
    }

    const searchSuggestion = (text) => {
        if (text === "")
            return
        setSearchText(text)
        setSuggestions([])
        setMode("definition")
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
            .then((data) => data.json())
            .then((res) => {
                if (res.message) {
                    setErrMsg(res)
                    setMode("error")
                    setMeanings([])
                }
                else {
                    setMeanings(res)
                }
            })
            .catch((err) => {
                setMode("unknown")
            })
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

    return <WordContext.Provider value={{
        mode, setMode, errMsg, setErrMsg, meanings, setMeanings, searchText, setSearchText, suggestions, setSuggestions, periodic, setPeriodic, fetchSuggestions, searchSuggestion, searchWord, updateSearchText, clearWord,
    }}>
        {children}
    </WordContext.Provider>
}