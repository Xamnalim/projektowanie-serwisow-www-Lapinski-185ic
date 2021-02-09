import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';
import TodoList from './components/TodoList';
import Gallery from './components/Gallery';

const useStyles = makeStyles({
  centered: {
    textAlign: "center"
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todolist">
              <TodoList />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>
            <Nav />
        </Router>
    </Container>
  )
};

export default App;
