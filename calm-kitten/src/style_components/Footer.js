import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p>site by <a href="https://github.com/NocturnalMusing/calm-kitten">
                    <em>NocturnalMusing</em></a> 
                    <i className="fas fa-crow"></i>
                    {/* Ask how to implement scripts like font awesome and new fonts in React */}
                </p>
            </div>
        )
    }
}

