import React, { useEffect, useState } from 'react'

import axios from 'axios'

import '../App.css'
import Header from '../style_components/Header'
import AgainButton from '../style_components/AgainButton'

export default function App() {
    let [joke, updateJoke] = useState([])

    const apiCall = async () => {
        const data = await axios.get('https://icanhazdadjoke.com/', 
        { headers: { Accept: 'application/JSON' } })

        updateJoke(data.data)
    }

    useEffect(() => {
        apiCall()
    }, [])

    return (
        <>
        <header>
            <Header />
        </header>
        <main>
            <div className='joke-div'>
                <p className='joke'>{joke.joke}</p>
            </div>

            <AgainButton onClick={apiCall}/>
        </main>
        </>
    )
}

