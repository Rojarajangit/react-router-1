import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Cart from './component/Cart'
import Header from './component/Header'
import Home from './component/Home'
import Product from './component/Product'

export default function App() {
  return (
    <div>
    <Link to="/">Home</Link><br/>
    <Link to="/cart">Cart</Link><br/>
    <Link to="/product">Product</Link><br/>
    <Link to="/product/TV">TV</Link>
     <Link to="/product/SP">SP</Link>

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
         //nested route
      <Route path='/product'>
      
        <Route index element={<product/>}/>

        <Route path='TV' >
              <Route index element={<h1>TV</h1>}/>

               <Route path='flat' element={<h1>flat TV</h1>}/>
               
               

        </Route>
        <Route path='SP' element={<h1>SP</h1>}/>

      </Route>
      <Route path='/*' element={<h1>404</h1>}/>

      </Routes>
      
    </div>
  )
}
