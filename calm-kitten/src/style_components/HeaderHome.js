import React, { Component } from 'react'
import '../App.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <p>Instructions:</p> 
                <p>Type "I need a laugh" for a joke</p>
                <p>Type "Tell me something kind" to read an uplifting quote</p>
                <p>Type "I need help" if you feel (idk smth here)</p>
            </div>
        )
    }
}
