import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import HeaderHome from '../style_components/HeaderHome'

import '../App.css'

export default function HomePage() {
    let [input, updateInput] = useState('')

    let userInput = (event) => {
        updateInput(event.target.value)
    }

    let redirect = () => {
        if (input === 'I need a laugh') {
            history.push('/laughter')
        } else if (input) {

        } else if (input) {

        } else {

        }
    }

    const history = useHistory()

    return (
        <>
        <HeaderHome />
            <form>
                <input type='text' className='input' onChange={userInput} ></input>
                <button onClick={redirect}>Replace Me</button>
            </form>
        </>
    )
}