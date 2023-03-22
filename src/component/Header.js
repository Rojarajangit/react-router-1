import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <div>
      <h1>Header</h1>
      <NavLink
      to="/"
      style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
    >
      Home
    </NavLink>
    <NavLink
      to="/cart"
      style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
    >
      cart
    </NavLink>
    <NavLink
      to="/product"
      style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
    >
      product
    </NavLink>
      
    </div>
  )
}