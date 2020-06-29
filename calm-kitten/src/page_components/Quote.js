import React, { useEffect, useState } from 'react'

import axios from 'axios'

import '../App.css'

export default function Quote() {
    let [quote, updateQuote] = useState([])

    const apiCall = async () => {
        const data = await axios.get('https://type.fit/api/quotes')

        console.log(data.data)
    }

    useEffect(() => {
        apiCall()
    }, [])

    return (
        <>
            <div>
                <p>This will be a quote</p>
            </div>
        </>
    )
}

