import React, { useEffect } from 'react';
import { getCoins, showCoin } from '../../actions/coinsActions';
import { useDispatch, useSelector } from 'react-redux';
import CoinCard from './coinCard';
import PriceChart from './priceCart';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col, Container } from 'react-bootstrap';

export const CoinsView = ({ deviceType }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    const loadCoins = () => dispatch(getCoins());
    loadCoins();
  }, []);

  const coins = useSelector((state) => state.coins.coins);
  const chartDays = useSelector((state) => state.coins.chart_days);
  console.log(coins);
  const cardClickHandler = (coin, chartDays) => {
    const showCoinDispatch = (coin, chartDays) =>
      dispatch(showCoin(coin, chartDays));
    showCoinDispatch(coin, chartDays);
    /* alert(coin.name); */
  };
  let coin = useSelector((state) => state.coins.coin);
 

  return (
    <div>
      <div></div>
      <div className={classes.row}>
        {coins === null
          ? 'Cargando'
          : coins.map((coin) => (
              <CoinCard coin={coin} onClickHandler={cardClickHandler} />
            ))}
      </div>

      <Row>
        <Col><PriceChart coin={coin} /></Col>
        <Col>
          <h1>Coin Info</h1>
        </Col>
      </Row>
    </div>
  );
};

const useStyles = makeStyles({
  coinRow: {
    marginRight: 10,

    width: '100%',
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
