import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6"></div>
      </div>
     </div>
    </>
  )
}

export default App
