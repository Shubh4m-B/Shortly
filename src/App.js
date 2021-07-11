import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Main from './Components/Main'
// import Form from './Components/Form'
import SubFooter from './Components/SubFooter'
import Footer from './Components/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Main />
        <SubFooter />
        <Footer />
      </div>
    )
  }
}

export default App

