import React, { useEffect, useState } from 'react'

import axios from 'axios'

import '../App.css'
import Header from '../style_components/Header'
import AgainButton from '../style_components/AgainButton'
import Laugh from '../assets/Mascot/img_LAUGH.png'

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
        <main className='joke-main'>
            <div className='joke-div'>
                <p className='joke'>{joke.joke}</p>
            </div>

            <div>
                <img src={Laugh} className='laugh'/>
            </div>

            <AgainButton onClick={apiCall}/>
        </main>
        </>
    )
}

