import React, { Component } from 'react'
import Route, {Link} from 'react-router-dom'
import '../App.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <p>I'm filler text</p> 
                {/* Ask how to change this per page when this component itself is just the container */}
            </div>
        )
    }
}
