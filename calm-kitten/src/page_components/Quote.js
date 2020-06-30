import React, { useEffect, useState } from 'react'

import axios from 'axios'

import '../App.css'

export default function Quote() {
    let [quote, updateQuote] = useState([])
    let [ random, updateRandom ] = useState(0)

    let randomInt = () => {
        let randomNum = Math.floor(Math.random() * 1643)

        updateRandom(randomNum)
        console.log(random)
    }

    const apiCall = async () => {
        const data = await axios.get('https://type.fit/api/quotes')
        
        // console.log(data.data[random].author)

    }

    useEffect(() => {
        apiCall()

        updateQuote()

        randomInt()
    }, [])

    return (
        <>
            <div>
                <p>This will be a quote</p>
                <p>And this will be an author</p>
            </div>
        </>
    )
}

