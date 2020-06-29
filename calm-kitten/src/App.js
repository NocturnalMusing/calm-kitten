import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import './App.css'

import Header from './style_components/Header'
import Footer from './style_components/Footer'

export default class App extends Component {

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <h1>I'm rendering</h1>
        </main>
        <Route></Route>
        <footer>
          <Footer />
        </footer>
      </>
    )
  }
}


