import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Product from './components/pages/Product'
import Navbar from './components/NavBar'
import Men from './components/pages/Men'
import Women from './components/pages/Women'

import NotFound from './components/pages/NotFound'
function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/About' element={<About />}/>
        <Route path = '/Product' element={< Product />}/>
        <Route path = '/Product/Men' element={< Men />}/>
        <Route path = '/Product/Women' element={< Women />}/>

         <Route path='/*' element={<NotFound />} />

        

      </Routes>
    </div>
  )
}

export default App