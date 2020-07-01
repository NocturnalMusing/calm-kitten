import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/' className='home-link'>
                    <h2>Home</h2>
                </Link>
            </div>
        )
    }
}
