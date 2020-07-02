import React, { Component } from 'react'

import Header from '../style_components/Header'

import SadBlink from '../assets/Mascot/img_SADBLINK.gif'

export default class Help extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='reach-out'>
                    <p>Asking for help is always the first step, and I promise you aren't alone!</p>
                    <p>Please reach out, if not to someone you know, then to a stranger.</p>
                    <br />
                    <p>National Suicide Prevention Lifeline</p>
                    <a href='tel:1-800-273-8255' className='nspl-number'>1-800-273-8255</a>
                    <p className='smalltext'>click to call</p>
                    <br />
                    <p>The world needs you in it!</p>
                    <i class="fas fa-heart"></i>
                
                    <img src={SadBlink} className='sad-blink'/>
                </div>
            </>
        )
    }
}
