import React, { Component } from 'react'
import '../App.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <p>Instructions:</p> 
                <p><em>type</em> "I need a laugh" <em>for a joke</em></p>
                <p><em>type</em> "Tell me something kind" <em>to read an uplifting quote</em></p>
                <p><em>type</em> "I need help" <em>if you feel (idk smth here)</em></p>
            </div>
        )
    }
}
