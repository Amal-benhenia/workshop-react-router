import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ItemsDisplay() {
  return (
    <div>
    <Link to='/items/1' >Item1</Link>
    <br/>
    <Link to='/items/2' >Item2</Link>
    <br/>
    <Link to='/items/3' >Item3</Link>
    <br/>
    <Link to='/items/new' >New Item</Link>
    <Outlet/>
    </div>
  )
}

export default ItemsDisplay