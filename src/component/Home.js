import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

const [data, setdata] = useState(null)


useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setdata(json))
    }, [])


  return (
    <div>
        <>
        {data?.map((item) => (
            <>
               <h1>{item.id}</h1>
               <h1>{item.title}</h1>
               <h1>{item.price}</h1>
                <button onClick={() => alert(item.id)}>❤️</button>

                <Link to={`/${item.id}`}>
                <button>Show item</button>
                </Link>
                <hr/>
            </>
           
      ))}
  
  </>

      <h1>Home</h1>
      
    </div>
  )
}
