import React from 'react'
import Main from '../components/Main'
import NotFound from '../components/NotFound'
import Random from '../components/Random'
import TopBar from '../components/TopBar'
import { useWord } from '../hooks/useWord'

const Landing = () => {
    const { mode, errMsg, } = useWord()

    return (
        <div className='landing'>
            <TopBar />
            {mode === "definition" && <Main />}
            {mode === "random" && <Random />}
            {mode === "error" && <NotFound data={errMsg} />}
            {mode === "unknown" && <NotFound data={
                {
                    title: "An Error Occurred",
                    message: "Unable to fetch data",
                    resolution: "Try to check your internet connection properly"
                }} />}
        </div>
    )
}

export default Landing