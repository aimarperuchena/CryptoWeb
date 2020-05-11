import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AvatarImage from '../../assets/img/avatar.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '10vw',
    
    height: '100vh',

    backgroundColor: '#0F0C29',
  },
  avatarImage: {
    margin: 'auto',
    height: '50%',
    width: '50%',
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  listText: {
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  listItem: {
    '&:hover': {
      background: '#25284B',
    },
  },
}));
export default function SidebarView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <Avatar className={classes.avatarImage} src={AvatarImage} />
        <ListItem>
          <p className={classes.listTitle}>MENU</p>
        </ListItem>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <DashboardIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Home" />
          </ListItem>
        </Link>
        <Link to="/coins" style={{ textDecoration: 'none' }}>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <AssessmentIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Coins" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
