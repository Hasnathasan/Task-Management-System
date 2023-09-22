import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";
import router from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <div className='bg-[#f7f7f7]'>
      <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </div>
    
  </NextUIProvider>
  
)
