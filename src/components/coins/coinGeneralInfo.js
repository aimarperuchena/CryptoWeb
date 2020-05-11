import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 5,
    height: 550,
    margin: 10,
    dispaly: 'flex',
    flexDirection: 'row',
  },
  coinImg: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  

}));

export default function CoinInfo(props) {
  const history = useHistory();
  const classes = useStyles();
  console.log(props);
  let coin = useSelector((state) => state.coins.coin);
  let coinSymbol;
  try {
    coinSymbol = coin.symbol.toUpperCase();
  } catch {
    history.push('/coins');
  }

  return (
    <Card className={classes.root}>
      <Col >
        <h1>{coin.market_cap_rank}</h1>
      </Col>
      <Col >
        <Avatar alt={coin.image} src={coin.image} className={classes.coinImg} />
        <h3 className={classes.title}>{coinSymbol}</h3>
      </Col>
    </Card>
  );
}
