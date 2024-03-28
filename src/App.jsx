import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Ubuot from './pages/Ubuot'
import Galery from './pages/Galery'
import Qewtshtion from './pages/Qewtshtion';
import From from './pages/From'



function App() {
 

  return (
    <>
    
      <nav>
      <BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/Ubuot' element={<Ubuot/>} />
<Route path='/Galery' element={<Galery/>} />
<Route path='/Qewtshtion' element={<Qewtshtion/>} />
<Route path='/from' element={<From/>} />

     </Routes>
</BrowserRouter>
      </nav>
    </>
  )
}

export default App

