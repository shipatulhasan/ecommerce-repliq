import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthProvider from './AuthProvider/AuthProvider'
import './index.css'
import 'react-phone-number-input/style.css'
axios.defaults.baseURL = 'https://e-commerce-repliq-server.vercel.app'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

    <App />
    </AuthProvider>
  </React.StrictMode>,
)
