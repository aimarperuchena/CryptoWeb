/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCoins, showCoin } from '../../actions/coinsActions';
import { useDispatch, useSelector } from 'react-redux';
import CoinCard from './coinCard';

import { makeStyles } from '@material-ui/core/styles';
import { Row, Col, Container } from 'react-bootstrap';

export const CoinsView = ({ deviceType }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    const loadCoins = () => dispatch(getCoins());
    loadCoins();
  }, []);

  const coins = useSelector((state) => state.coins.coins);

  const cardClickHandler = (coin) => {
    const showCoinDispatch = (coin) => dispatch(showCoin(coin));
    showCoinDispatch(coin);
    history.push('/coin/' + coin.id);
  };

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        {coins === null
          ? 'Cargando'
          : coins.map((coin) => (
              <CoinCard coin={coin} onClickHandler={cardClickHandler} />
            ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: '90vw',
  },
  coinRow: {
    marginRight: 10,

    width: '100%',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chartsColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  priceChartDiv: {
    height: '50vh',
    backgroundColor: 'red',
  },
});

export default CoinsView;
