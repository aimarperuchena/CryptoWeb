import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
export default function HomeView(props) {
  const coin = props.coin;
  const classes = useStyles();

  const renderChart = () => {
    if (coin.name !== undefined) {
      console.log(coin.sparkline_in_7d.price);
      
      return (
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {coin.name}
            </Typography>
            <Paper>
              <Chart data={coin.sparkline_in_7d.price}>
                <ArgumentAxis />
                <ValueAxis />

                {/* <LineSeries valueField="y" argumentField="x" /> */}
              </Chart>
            </Paper>
          </CardContent>
        </Card>
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
