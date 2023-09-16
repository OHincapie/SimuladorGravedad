import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { getRoutes } from "./routes"
import { store } from './store/store.js'
import { RouterProvider } from 'react-router-dom'


const router = getRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>,
)
