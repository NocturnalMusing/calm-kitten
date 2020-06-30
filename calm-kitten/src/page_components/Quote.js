import React, { useEffect, useState } from 'react'

import axios from 'axios'

import '../App.css'
import Header from '../style_components/Header'

export default function Quote() {
    let [quote, updateQuote] = useState([])
    let [random, updateRandom] = useState(0)

    let randomInt = () => {
        let randomNum = Math.floor(Math.random() * 1643)

        updateRandom(randomNum)
    }

    const apiCall = async () => {
        const data = await axios.get('https://type.fit/api/quotes')

        updateQuote(data.data[random])
    }

    useEffect(() => {
        randomInt()

    }, [])

    useEffect(() => {
        apiCall()

    }, [random])
    // NOTE: By putting random in these brackets you're telling this useEffect to run when random updates

    return (
        <>
            <Header />
            <div className='quote'>
                <p className='text'>{quote.text}</p>
                <p className='author'>{quote.author}</p>
            </div>
        </>
    )
}

