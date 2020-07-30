import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import ButtonComponent from './components/Button';
import { doPost } from './utils/api';
import Home from './pages/Home';
import Page2 from './pages/Page2';

class App extends React.PureComponent {
  // handleClick = async (e) => {
  //   e.preventDefault();
  //   const response = await doPost('http://localhost:3001/test');
  //   console.log(response);
  // }

  // https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
  // https://material-ui.com/components/grid/
  render() {
    return (
      <Router>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/page2">Page 2</Link>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
