import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <div className='bg-[#0D47A1] min-h-screen flex justify-center items-center'>
            <App />
      </div>
  </BrowserRouter>
  </React.StrictMode>,
)
