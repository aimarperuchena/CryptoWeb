import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useDispatch, useSelector } from 'react-redux';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { showCoinChart } from '../../actions/coinsActions';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
const useStyles = makeStyles({
  root: {
    borderColor: 'black',
    border: '1px black solid',
    margin: 5,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function PriceChart(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const coin = props.coin;
  const chartDays = props.days;
  useEffect(() => {
    const loadChart = () => dispatch(showCoinChart(props.coin, props.days));

    loadChart(props.coin, props.days);
  }, []);

  let loading = useSelector((state) => state.coins.loading);
  let coin_chart = useSelector((state) => state.coins.coin_chart);
  if (loading === false && coin_chart !== undefined) {
    console.log(coin_chart);
  }

  const renderChart = () => {
    if (coin !== undefined) {
      return (
        <div>
          <h1>
            {coin} {chartDays}
          </h1>
        </div>
      );
    }
  };
  return (
    <div>
      {renderChart()}
      <p>Hola</p>
    </div>
  );
}
