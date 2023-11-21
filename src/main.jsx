import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import ContextApi from './contexts./ContextApi'
import { AuthContext, AuthProvider } from './contexts/AuthContext'
import { BrowserRouter }  from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider value={AuthContext}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
