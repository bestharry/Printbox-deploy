import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import About from './Components/Pages/About'
import Shop from './Components/Pages/Shop'
import Stores from './Components/Pages/Stores'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'
import ProductDetails from './Components/Pages/ProductDetails'
import Wishlist from './Components/Pages/Wishlist'
import Cart from './Components/Pages/Cart'
import Checkout from './Components/Pages/Checkout'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/store" element={<Stores />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
