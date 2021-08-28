import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Main from './containers/Main'
import About from './containers/About'
import CardDetails from './components/CardDetails'

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`

const App = () => {

  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/carddetails/:name" component={CardDetails} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
