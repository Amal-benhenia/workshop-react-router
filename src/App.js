import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import ItemsList from './pages/ItemsList'
import Item from './pages/Item'
import NewItem from './pages/NewItem'
import NotFound from './pages/NotFound'
import ItemsDisplay from './ItemsDisplay'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link> </li>
          <li><Link to="/about">About</Link> </li>
          <li><Link to="/items">Shop</Link> </li>
          <li><Link to="/contact">Contact</Link> </li>
         </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/items' element={<ItemsDisplay/>}>
        <Route index element={<ItemsList/>} />
        <Route path='/items/:id' element={<Item/>} />
        <Route path='/items/new' element={<NewItem/>} />
        </Route>
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App