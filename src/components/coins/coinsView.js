import React, { useEffect } from 'react';
import { readCoins } from '../../actions/coinsActions';
import { useDispatch, useSelector } from 'react-redux';
import CoinCard from './coinCard';
import { makeStyles } from '@material-ui/core/styles';
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
    <div className={classes.mainContainer}>
      <div className={classes.cardList}>
        {coins.length === 0
          ? 'Cargando'
          : coins.map((coin) => (
              <CoinCard coin={coin} onClickHandler={cardClickHandler} />
            ))}
      </div>
      <div className={classes.row}>
        <div className={classes.chartsColumn}>
          <div className={classes.priceChartDiv}>
            <h1>Price Chart</h1>
          </div>
          <div className={classes.volumeChartDiv}>
            <h1>VolumeChart</h1>
          </div>
        </div>
        <div className={classes.coinInfo}>
          <h1>Coin Info</h1>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  chartsColumn: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  priceChartDiv:{
    height:'50vh',
    backgroundColor:'red'
  },
  
});

export default CoinsView;
