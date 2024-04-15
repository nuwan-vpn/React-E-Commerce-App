import { useState } from 'react'
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
      <Navbar/>
      <ProductList/>
      <Details/>
      <Cart/>
      <Default/>
    </>
  )
}

export default App
