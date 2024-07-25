import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Intro from '@/pages/intro'
import Home from '@/pages/home'
import Trade from '@/pages/trade';
import Pool from '@/pages/pool'
import Launch from '@/pages/launch'
import Bridge from '@/pages/bridge'
import Portfolio from '@/pages/portfolio'
import Explore from './pages/explore'


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App />} >
      <Route index element={<Trade />} />
      <Route path='/intro' element={<Intro />} />
      <Route path='/home' element={<Home />} />
      <Route index path='/swap' element={<Trade />} />
      <Route path='/pool' element={<Pool />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/launch' element={<Launch />} />
      <Route path='/dashboard' element={<Portfolio />} />
      <Route path='/bridge' element={<Bridge />} />
    </Route>
  ])
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
