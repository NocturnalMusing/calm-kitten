import React, { Component } from 'react'
import '../App.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h3><strong>Instructions</strong>:</h3> 
                <p>type <em>"I need a laugh"</em> for a joke</p>
                <p>type <em>"Tell me something kind"</em> to read an uplifting quote</p>
                <p>type <em>"I need help"</em> for professional aid</p>
            </div>
        )
    }
}
