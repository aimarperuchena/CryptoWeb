import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 400,
    margin: 10,
  },
}));

export default function CoinChange(props) {
  const coin = props.coin;

  const classes = useStyles();

  return <Card className={classes.root}></Card>;
}
