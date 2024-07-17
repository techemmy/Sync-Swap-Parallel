import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Intro from '@/pages/intro'
import Home from '@/pages/home'
import Trade from '@/pages/trade';


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App />} >
      <Route index element={<Trade />} />
      <Route path='/intro' element={<Intro />} />
      <Route path='/home' element={<Home />} />
      <Route index path='/trade' element={<Trade />} />
    </Route>
  ])
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
