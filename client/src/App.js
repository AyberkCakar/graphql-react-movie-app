import React from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const  client = new ApolloClient({
   url: 'http:localhost:5000/graphql'
});

function App() {
  return (
      <ApolloProvider client = {client}>
          <div className="App">
              <p>my app</p>
          </div>
      </ApolloProvider>
  );
}

export default App;
