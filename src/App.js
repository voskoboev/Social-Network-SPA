import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import About from './pages/About'
import CreateCard from './pages/CardCreator'
import Auth from './pages/Auth'
import CardDetails from './components/CardDetails'
import Error from './pages/Error'
import Footer from './components/Footer'

// ширина без адаптивности
const Container = styled.main`
  width: 1170px;
  margin: 0 auto;
  flex: 1 1 auto;
`
// ?
const AppWrapper = styled.div` 
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const App = () => {

  return (
    <AppWrapper>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" component={About} />
            <Route path="/createcard" component={CreateCard} />
            <Route path="/auth" component={Auth} />
            <Route path="/cards/:id" component={CardDetails} />
            <Route path="/error" component={Error} />
            <Redirect to="/error" />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </AppWrapper>
  )
}

export default App
