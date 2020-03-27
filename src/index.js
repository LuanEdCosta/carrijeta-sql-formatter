import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './config/IconLibrary'
import store from './store'
import App from './pages/App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
