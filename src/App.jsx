import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Products from './components/Products'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="menu">
          <Menu/>
        </div>
        <div id="about">
          <About />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="reviews">
          <Review />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
