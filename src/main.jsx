import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import jQuery from "jquery";

Object.assign(window, { $: jQuery, jQuery });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
