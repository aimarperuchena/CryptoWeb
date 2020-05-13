import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
  root: {
    height: 550,
    margin: 10,
    borderRadius: 20,
    WebkitBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    MozBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    boxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    color: '#0F0C29',
    padding: 10,
  },
  coinImg: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    marginTop: 10,
  },
  object: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    textAlign: 'center',
  },
  objectGreen: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    textAlign: 'center',
    color: 'green',
  },
  objectRed: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    textAlign: 'center',
    color: 'red',
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
  const marketCap = (coin.market_cap / 1000000).toFixed(2);
  const formater = (value) => {
    try {
      if (value > 1000000) {
        return (value / 1000000).toFixed(2) + ' Million';
      }
      return value.toFixed(2);
    } catch (err) {}
  };
  const renderObject = (title, data, text, value) => {
    if (value > 0) {
      return (
        <div className={classes.objectGreen}>
          <p>{title}</p>
          <p>
            {data} {text}
          </p>
        </div>
      );
    } else if (value < 0) {
      return (
        <div className={classes.objectRed}>
          <p>{title}</p>
          <p>
            {data} {text}
          </p>
        </div>
      );
    }
    return (
      <div className={classes.object}>
        <p>{title}</p>
        <p>
          {data} {text}
        </p>
      </div>
    );
  };

  return (
    <Card className={classes.root}>
      <div className={classes.row}>
        <h1>#{coin.market_cap_rank}</h1>
        <Avatar alt="Coin" src={coin.image} className={classes.coinImg} />
      </div>
      <div className={classes.row}>
        {renderObject('Capital', formater(coin.market_cap), '€')}
      </div>
      <div className={classes.row}>
        {renderObject('Volume', formater(coin.total_volume), '€')}
      </div>
      <div className={classes.row}>
        {renderObject(
          'Capital Change',
          formater(coin.market_cap_change_percentage_24h),
          '%',
          coin.market_cap_change_percentage_24h,
        )}
      </div>
      <div className={classes.row}>
        {renderObject('Suply', formater(coin.circulating_supply))}
      </div>
      <div className={classes.row}>
        {renderObject('Total Suply', formater(coin.total_supply))}
      </div>

      <div className={classes.row}>
        {renderObject('24H MAX ', formater(coin.high_24h), '€', coin.high_24h)}
      </div>
      <div className={classes.row}>
        {renderObject('24H MIN ', formater(coin.low_24h), '€', -coin.low_24h)}
      </div>
      <div className={classes.row}>
        {renderObject('24H MAX/MIN ', formater(coin.high_24h-coin.low_24h), '€')}
      </div>
    </Card>
  );
}
