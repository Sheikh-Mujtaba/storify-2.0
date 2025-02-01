import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Details from './pages/Details'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'


function App() {


  return (
    <>
     <div>
     
      <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/cart' element={<Cart/>}/>
          


        </Routes>
      </Router>
      </CartProvider>
     

     </div>
    </>
  )
}

export default App
