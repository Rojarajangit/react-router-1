import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
   const { id } = useParams()
   const [product, setproduct] = useState(null)
   

useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setproduct(json))

}, [id])

   return (
    <div>
        {id}
        <pre>{JSON.stringify(product, null, 2)}</pre>
      <h1>Product</h1>
        <h3>{product.title}</h3>
        <h3>{product.description}</h3>
        <h3>${product.price}</h3>
      
      
    </div>
  )
}