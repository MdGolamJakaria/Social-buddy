import React from 'react';
import './App.css';
import Header from './compunent/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './compunent/Home/Home';
import PostDetail from './compunent/PostDetail/PostDetail';
import NotMatch from './compunent/NotMatch/NotMatch';
import Container from '@material-ui/core/Container'

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/home" >
              <Home></Home>
            </Route>
            <Route exact path="/" >
              <Home></Home>
            </Route>
            <Route path="/post/:postId" >
              <PostDetail></PostDetail>
            </Route>
            <Route path="*">
              <NotMatch></NotMatch>
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
