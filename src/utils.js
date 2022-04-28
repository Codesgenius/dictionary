export const fetchSuggestions = (text, cb) => {
    fetch(`https://api.datamuse.com/sug?s=${text}`)
        .then((data) => data.json())
        .then((res) => {
            cb(res)
        })
        .catch((err) => { console.log(err) })
}

export const fetchWord = (searchText, setMeanings, setSuggestions) => {
    if (searchText === "")
        return
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)
        .then((data) => data.json())
        .then((res) => {
            setMeanings(res)
            setSuggestions([])
        })
        .catch((err) => { console.log(err) })
}