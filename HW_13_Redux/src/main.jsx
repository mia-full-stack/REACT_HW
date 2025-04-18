import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./redux/store"

import App from '../src/components/App/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </StrictMode>
);
