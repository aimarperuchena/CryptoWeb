import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { time_format } from '../../functions/timeFunctions';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Area,
  CartesianGrid,
} from 'recharts';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    margin: 5,
    paddingRight: 20,
    width: '100%',
  },
}));

export default function PriceChart(props) {
  const classes = useStyles();
  const data = props.data.prices;
  let prices = [];
  let days = props.days;

  const chartDataPreparation = () => {
    try {
      for (let i = 0; i < data.length; i++) {
        var myDate = new Date(data[i][0]);
        if (days > 1) {
          let time = myDate.toLocaleDateString();

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
      {chartDataPreparation()}
    </div>
  );
}
