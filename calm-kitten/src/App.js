import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import './App.css'

import Header from './style_components/Header'
import Footer from './style_components/Footer'
import Joke from './page_components/Joke'
import Quote from './page_components/Quote'

export default class App extends Component {

  render() {
    return (
      <>
        <header>
          <Header />
        </header>

        <main>
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


