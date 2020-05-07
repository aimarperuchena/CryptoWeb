import React from 'react';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/homeView';
import Prices from './components/cryptocurrency/cryptocurrencyView';
import Sidebar from './components/sidebar/sidebarView';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default function Routes() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Sidebar />
        <div>
          {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/prices">Prices</Link>
          </li>
        </ul> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cryptocurrency">
              <Prices />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
