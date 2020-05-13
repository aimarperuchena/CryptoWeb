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

export default function VolumeChart(props) {
  const classes = useStyles();
  const data = props.data.total_volumes;
  let prices = [];
  let days = props.days;

  const chartDataPreparation = () => {
    try {
      if (days > 1) {
        for (let i = 0; i < data.length; i++) {
          var myDate = new Date(data[i][0]);

          let time = myDate.toLocaleDateString();
          prices.push({ time: time, volume: data[i][1] / 1000000 });
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          var myDate2 = new Date(data[i][0]);
          let time = time_format(myDate2);

          prices.push({ time: time, volume: data[i][1] / 1000000 });
        }
      }

      return (
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart data={prices}>
            <XAxis dataKey="time" />
            <YAxis type="number" domain={['auto', 'auto']} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
            <Legend verticalAlign="top" height={36} />
            <Area
              type="monotone"
              dataKey="volume"
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
      <h2>Volume Millions</h2>
      {chartDataPreparation()}
    </div>
  );
}
