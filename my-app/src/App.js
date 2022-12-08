import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Signup from './pages/Signup';
import Health from './pages/Health/Health';
import Food from './pages/Food/food';
import Media from './pages/Media/media';
import Style from './pages/Style/style';
import Work from './pages/Work/work';
import NightLife from './pages/Nightlife/nightlife';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Header/>
          <div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login"  element={<Login/>} />
              <Route path="/signup"  element={<Signup/>} />
              <Route path="/health"  element={<Health/>} />
              <Route path="/food"  element={<Food/>} />
              <Route path="/media"  element={<Media/>} />
              <Route path="/style"  element={<Style/>} />
              <Route path="/work"  element={<Work/>} />
              <Route path="/nightlife"  element={<NightLife/>} />
              <Route  element={<NoMatch/>} />
            </Routes>
          </div>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
