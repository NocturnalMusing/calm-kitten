import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import HeaderHome from '../style_components/HeaderHome'
import EnterButton from '../style_components/EnterButton'
import Blink from '../assets/Mascot/img_BLINK.gif'

import '../App.css'

export default function HomePage() {
    let [input, updateInput] = useState('')

    let userInput = (event) => {
        updateInput(event.target.value)
    }

    let redirect = () => {
        if (input === 'I need a laugh') {
            history.push('/laughter')
        } else if (input === 'Tell me something kind') {
            history.push('/wisdom')
        } else if (input === 'I need help') {
            history.push('/reach_out')
        } else {

        }
    }

    const history = useHistory()

    return (
        <>
            <HeaderHome />
            <div className='home-page'>
                <div>
                    <img src={Blink} className='blink'/>
                </div>

                <form>
                    <input type='text' className='input' onChange={userInput} ></input>
                    <EnterButton onClick={redirect} />
                </form>
            </div>
        </>
    )
}