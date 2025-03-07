import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './components/Index'
import About from './components/About'
import Company from './components/Company'
import Features from './components/Features'

import './App.css'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/company" component={Company} />
          <Route path="/features" component={Features} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
