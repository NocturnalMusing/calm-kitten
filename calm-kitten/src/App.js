import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import './App.css'

import Header from './style_components/Header'
import Footer from './style_components/Footer'
import Joke from './page_components/Joke'

export default class App extends Component {

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          
        </main>
        <Route path='/laughter'>
          <Joke />
        </Route>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}


