import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Col from 'react-bootstrap/Col';
import Header from './coinDetailHeader';
import PriceChart from './coinPriceChart';
import VolumeChart from './coinVolumeChart';
import CoinInfo from './coinGeneralInfo';
import CoinChangeInfo from './coinChangeInfo';
import TimeSelector from './coinTimeSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { time_format } from '../../functions/timeFunctions';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '90vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col1: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  col2: {
    display: 'flex',
    flexDirection: 'column',
  },
  chartsCard: {
    borderRadius: 20,
    WebkitBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    MozBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    boxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    height: '85%',
    paddingLeft: 5,

    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
}));
export default function CoinDetailView() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const coinInfo = useSelector((state) => state.coins.coin);
  const [data, setData] = useState({});
  const [days, setDays] = useState(1);
  let coin = useSelector((state) => state.coins.coin);
  const [pricesChart, setPricesChart] = useState();
  const [volumeChart, setVolumeChart] = useState();
  useEffect(() => {
    const fetchData = async () => {
      let url = `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=eur&days=${days}`;
      const result = await axios(url);

      setData(result.data);
      let prices = [];
      let volume = [];
      for (let i = 0; i < data.prices.length; i++) {
        var myDate = new Date(data[i][0]);
        if (days > 1) {
          let time = myDate.toLocaleString();
          console.log('asdasdasdasdasdasdasd' + myDate.toLocaleString);
          prices.push({ time: time, price: data.prices[i][1] });
          volume.push({ time: time, volume: data.total_volumes[i][1] });
        } else {
          let time = time_format(myDate);

          prices.push({ time: time, price: data.prices[i][1] });
          volume.push({ time: time, volume: data.total_volumes[i][1] });
        }
      }
      setPricesChart(prices);
      setVolumeChart(volume);
    };

    fetchData();
  }, []);
  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (loading) return;
    console.log(loading);
    // update state
    setLoading(true);
    // send the actual request
    let url = `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=eur&days=${days}`;
    const result = await axios(url);
    setData(result.data);

    // once the request is sent, update state again
    setLoading(false);
    console.log('Loading: ' + loading);
  }, [loading]); // update the callback if the
  const changeDays = (days) => {
    setDays(days);
    sendRequest();
  };
  return (
    <div className={classes.root}>
      <Col xs={12} xl={9} sm={12} className={classes.col1}>
        <Header coin={coinInfo} />
        <Card className={classes.chartsCard}>
          <PriceChart data={data} days={days} />
          <VolumeChart data={data} days={days} />
          <TimeSelector days={days} onClick={changeDays} />
        </Card>
      </Col>
      <Col xs={12} xl={3} sm={12} className={classes.col2}>
        <CoinInfo />
        <CoinChangeInfo />
      </Col>
    </div>
  );
}
