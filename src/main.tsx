import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/apollo'
import { App } from './App'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBuilding,
  faEnvelope,
  faStar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faUserGroup, faStar, faBuilding, faEnvelope, faTwitter)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
