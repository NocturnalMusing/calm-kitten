import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import './App.css'

import Footer from './style_components/Footer'
import HomePage from './page_components/HomePage'
import Joke from './page_components/Joke'
import Quote from './page_components/Quote'
import Help from './page_components/Help'

export default class App extends Component {

  render() {
    return (
      <>
        <main>
        <Route path='/' exact>
          <HomePage />
        </Route>

        <Route path='/reach_out'>
          <Help />
        </Route>

        <Route path='/laughter'>
          <Joke />
        </Route>

        <Route path='/wisdom'>
          <Quote />
        </Route>
        </main>
        
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}


