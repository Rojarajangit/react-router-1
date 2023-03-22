import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Cart from './component/Cart'
import Header from './component/Header'
import Home from './component/Home'
import Product from './component/Product'

export default function App() {
  return (
    <div>
    <Header/>
      <Routes>
         <Route 
          path='/'
           element={<Home/>}
           />
        <Route
         path='/cart' 
         element={<Cart/>}
         />
       <Route path='/:id' element={<Product />}/>
       
      </Routes>
      
    </div>
  )
}
