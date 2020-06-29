import React from 'react'
import Route, { Link } from 'react-router-dom'
import axios from 'axios'

import './App.css'

import Header from './style_components/Header'
import Footer from './style_components/Footer'

export default function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <h1>I'm rendering</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )

}


