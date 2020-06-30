import React, { Component } from 'react'

import Header from '../style_components/Header'

export default class Help extends Component {
    render() {
        return (
            <>
                <Header />
                <div>
                    <p>Asking for help is always the first step, and I promise you aren't alone!</p>
                    <p>Please reach out, if not to someone you know, then to a stranger.</p>
                    <br />
                    <p>National Suicide Prevention Lifeline</p>
                    <p>1-800-273-8255</p>
                    <br />
                    <p>The world needs you in it! <i class="fas fa-heart"></i></p>
                </div>
            </>
        )
    }
}
