import React from 'react'
import './Products.css'

export default function Products() {
  return (
    <div>
        <div className='Productsitem'>
          <div className='Card1'>
            <img id="Logo1" src={require('./t-shirt.png')} alt="img" />
            </div>
            <div className='Card2'>            
            <img id="Logo2" src={require('./combatshirt.png')} alt="img" />
            </div>
            <div className='Card3'>    
            <img id="Logo3" src={require('./cup.png')} alt="img" />
            </div>

            </div>
    </div>
  )
}


