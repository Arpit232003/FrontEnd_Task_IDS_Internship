import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <BrowserRouter> */} {/* I AM NOT USING BROWSERTOUTER BECAUSE IT WILL GENERATE PROBLEM IN ROUTING WHEN DEPLOYED ON GITHUB  */}
    <HashRouter >
    <App />
  </HashRouter>
    {/* </BrowserRouter> */}
    </Provider>
  ,
)
