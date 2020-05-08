import React, { useEffect } from 'react';
import { readCoins } from '../../actions/coinsActions';
import { useDispatch, useSelector } from 'react-redux';
import CoinCard from './coinCard';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
export const CoinsView = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    const loadCoins = () => dispatch(readCoins());
    loadCoins();
  }, []);

  const coins = useSelector((state) => state.coins.coins);
  console.log(coins);
  const cardClickHandler = (coin) => {
    alert(coin.name);
  };
  return (
    <Container className={classes.mainContainer}>
      <Row>
        {coins.length === 0
          ? 'Cargando'
          : coins.map((coin) => (
              <CoinCard coin={coin} onClickHandler={cardClickHandler} />
            ))}
      </Row>
    </Container>
  );
};

const useStyles = makeStyles({
  mainContainer: {
    margin: 0,
    paddingRight: 0,
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
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
