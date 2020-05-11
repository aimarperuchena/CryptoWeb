import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import { time_format } from '../../functions/timeFunctions';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Legend,
  CartesianAxis,
  Tooltip,
  ReferenceLine,
  Area,
  CartesianGrid,
} from 'recharts';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    margin: 5,
    paddingRight: 20,
    width: '100%',
    color: '#0F0C29',
  },
}));

export default function PriceChart(props) {
  const classes = useStyles();
  const data = props.data.prices;
  const [loading, setLoading] = useState(false);

  let prices = [];
  let days = props.days;

  const chartDataPreparation = () => {
    try {
      for (let i = 0; i < data.length; i++) {
        var myDate = new Date(data[i][0]);
        if (days > 1) {
          let time = myDate.toLocaleString();
          console.log('asdasdasdasdasdasdasd' + myDate.toLocaleString);
          prices.push({ time: time, price: data[i][1] });
        } else {
          let time = time_format(myDate);

          prices.push({ time: time, price: data[i][1] });
        }
      }

      return (
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={prices}>
            <XAxis dataKey="time" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
            <Legend verticalAlign="top" height={36} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#242862"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.root}>
      <h2>Prices</h2>
      <h2>{days}</h2>
      {chartDataPreparation()}
    </div>
  );
}
