import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/homeView';
import Coins from './components/coins/coinsView';
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
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/coins">
              <Coins />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
