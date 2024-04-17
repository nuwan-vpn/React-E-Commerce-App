import { useState } from 'react'
import { Switch, Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Switch>
        <Router exact path="/" component={ProductList}/>
        <Router path="/detai;s" component={Details}/>
        <Router path="/cart" component={Cart} />
        <Router component={Default}/>
      </Switch>
      <Navbar/>
    </>
  )
}

export default App
