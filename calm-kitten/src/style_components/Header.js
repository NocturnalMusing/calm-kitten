import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/'>
                    <h2 className='home'>Home</h2>
                </Link>
            </div>
        )
    }
}
