import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux';
import store from './redux/store.js'
import './index.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
    
  // </StrictMode>, 
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
