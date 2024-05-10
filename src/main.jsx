import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReduxMeta, ReDuxMetaProvider } from '@opensource-dev/redux-meta'

// css
import '@assets/css/style.css'

// views
import App from '@views/app'

// modules
import app from '@modules/app'

// init redux meta globally
const reduxMeta = new ReduxMeta()
window.$reduxMeta = reduxMeta
window.$reduxMeta.useModules(app())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReDuxMetaProvider>
      <App />
    </ReDuxMetaProvider>
  </React.StrictMode>
)
