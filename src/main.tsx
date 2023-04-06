import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from 'pages/home'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
  </RecoilRoot>
)
