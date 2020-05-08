import React, { useEffect } from 'react';
import { getCoins, showCoin } from '../../actions/coinsActions';
import { useDispatch, useSelector } from 'react-redux';
import CoinCard from './coinCard';
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
  console.log(coins);
  const cardClickHandler = (coin) => {
    const showCoinDispatch = (coin) => dispatch(showCoin(coin));
    showCoinDispatch(coin);

    /* alert(coin.name); */
  };
  return (
    <div>
      <div></div>
      <div className={classes.row}>
        {coins.length === 0
          ? 'Cargando'
          : coins.map((coin) => (
              <CoinCard coin={coin} onClickHandler={cardClickHandler} />
            ))}
      </div>
      <Container className={classes.mainContainer}>
        <Row>
          <Col>
            <h1>PRICE CHART</h1>
          </Col>
          <Col>
            <h1>Coin Info</h1>
          </Col>
        </Row>
      </Container>
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
