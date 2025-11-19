import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import FeaturesPage from './pages/FeaturesPage'
import Science from './pages/Science'
import About from './pages/About'
import Test from './Test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="science" element={<Science />} />
          <Route path="about" element={<About />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
