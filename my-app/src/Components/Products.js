import React from 'react'
import './Products.css'

export default function Products() {
  return (
    <div>
        <div className='Productsitem'>
            <img id="Logo1" src={require('./t-shirt.png')} alt="img" />
            <img id="Logo2" src={require('./combatshirt.png')} alt="img" />
            <img id="Logo3" src={require('./cup.png')} alt="img" />

            </div>
    </div>
  )
}


