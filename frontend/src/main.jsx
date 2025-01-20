import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ShopContextProvider>
      <App />
      <PlaceOrder/>
    </ShopContextProvider>
  </BrowserRouter>,
 
)
