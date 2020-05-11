import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
    margin: 10,
    flexDirection: 'row',
    borderRadius: 20,
    WebkitBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    MozBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    boxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    color: '#0F0C29',
    /* fontFamily:
      'font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif', */
  },
  up: {
    color: 'green',
  },
  down: {
    color: 'red',
  },
}));

export default function Header(props) {
  let coin = useSelector((state) => state.coins.coin);
  const history = useHistory();

  const classes = useStyles();
  if (typeof coin.symbol === undefined) {
  }
  console.log(typeof coin.symbol);
  const renderChange = (val, sub) => {
    if (val > 0) {
      return (
        <h2 className={classes.up}>
          {val} {sub}
        </h2>
      );
    } else {
      return (
        <h2 className={classes.down}>
          {val} {sub}
        </h2>
      );
    }
  };
  try {
    return (
      <Card className={classes.root}>
        <h1>{coin.name}</h1>
        <h2>{coin.current_price} €</h2>

        {renderChange(coin.price_change_24h, '€')}
        {renderChange(coin.price_change_percentage_24h.toFixed(2), '%')}
      </Card>
    );
  } catch (err) {
    history.push('/coins');
    return <></>;
  }
}
