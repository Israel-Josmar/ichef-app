import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import App from './src/App'
import { name as appName } from './app.json'

const client = new ApolloClient({
  uri: 'http://10.0.2.2:4000/graphql',
})

const connectedApp = () => (
  <ApolloProvider client={client}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </ApolloProvider>
)

AppRegistry.registerComponent(appName, () => connectedApp)
