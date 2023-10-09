import React from 'react'
import '../src/App.css'
import Products from './Components/Products'

export default function App() {
  return (

<>
<div className="App">
<div class="container">

    <img id="Logo" src={require('./logo.png')} alt="img" />

<Products />
    </div>

    </div>


    
</>

    )
  }

