import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import ContextApi from './contexts./ContextApi'
import { BrowserRouter }  from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    {/*} <ContextApi> */}
    <BrowserRouter>
        <App />
      </BrowserRouter>
  {/*}  </ContextApi>     */}
   </AuthProvider>
  </React.StrictMode>,
);
