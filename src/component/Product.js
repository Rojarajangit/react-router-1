import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
   const { id } = useParams()


   return (
    <div>
        <h1>{id}</h1>
      <h1>Product</h1>
      
    </div>
  )
}