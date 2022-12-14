import React from 'react'
import { NavLink } from "react-router-dom"


const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li><NavLink to='/products/p1'>A Book</NavLink></li>
        <li><NavLink to='/products/p2'>A Carpet</NavLink></li>
        <li><NavLink to='/products/p3'>An Online Course</NavLink></li>
      </ul>
       
    </section>
  )
}

export default Products