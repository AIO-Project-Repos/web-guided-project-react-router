import React, { useState, useEffect } from 'react'
// 👉 STEP 2 - React Router imports
import { Link, Route, Switch } from 'react-router-dom'

// Components used for the different routes
import Home from './Home'
import ItemsList from './ItemsList'
import Item from './Item'

// Dummy data
import data from '../data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

export default function App(props) {
  const [stock, setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])

  useEffect(() => {
    // if authed navigate here
    // otherwise there
  }, [])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Emily&apos;s Trinkets</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
          <Link to='/'>Home</Link>
          <Link to='/items-list'>Shop </Link>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      {/* <Route exact path='/' component={Home} /> */}
      {/* <Route exact path='/' render={() => <Home foo='bar' />} /> */}

      <Route exact path='/'>
        <Home foo='bar' />
      </Route>

      <Route path='/items-list'>
        <ItemsList items={stock} />
      </Route>

      <Route path='/items-list/:id'>
        <Item />
      </Route>
    </div>
  )
}
