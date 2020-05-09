import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/homeView';
import CoinsView from './components/coins/coinsView';
import CoinsDetailView from './components/coins/coinDetailView';
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
              <CoinsView />
            </Route>
            <Route path="/coin/:id">
              <CoinsDetailView />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
