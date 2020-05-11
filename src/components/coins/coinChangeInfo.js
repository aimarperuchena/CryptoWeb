import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 400,
    margin: 10,
    borderRadius: 20,
    WebkitBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    MozBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    boxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    color: '#0F0C29',
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  greenChange: {
    backgroundColor: '#8AFF9D',
    color: 'green',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    WebkitBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    MozBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    boxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    justifyContent: 'space-between',
    padding: 10,
    width: 110,
  },
  redChange: {
    backgroundColor: '#FF8F8A',
    color: 'red',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    WebkitBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    MozBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    boxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    justifyContent: 'space-between',
    padding: 10,
    width: 110,
  },
}));

export default function CoinChange(props) {
  let coin = useSelector((state) => state.coins.coin);
  const classes = useStyles();

  const renderChange = (title, value, icon) => {
    try {
      if (value > 0) {
        return (
          <div className={classes.greenChange}>
            <p>{title}</p>
            <p>
              {value.toFixed(2)}
              {icon}
            </p>
          </div>
        );
      } else {
        return (
          <div className={classes.redChange}>
            <p>{title}</p>
            <p>
              {value.toFixed(2)}
              {icon}
            </p>
          </div>
        );
      }
    } catch (err) {}
  };
  return (
    <Card className={classes.root}>
      <div className={classes.row}>
        <h1>Price Changes</h1>
      </div>

      <div className={classes.row}>
        {renderChange('1H', coin.price_change_percentage_1h_in_currency, '%')}
        {renderChange('24H', coin.price_change_percentage_24h_in_currency, '%')}
      </div>
      <div className={classes.row}>
        {renderChange('7D', coin.price_change_percentage_7d_in_currency, '%')}
        {renderChange('14D', coin.price_change_percentage_14d_in_currency, '%')}
      </div>
      <div className={classes.row}>
        {renderChange('30D', coin.price_change_percentage_30d_in_currency, '%')}
        {renderChange(
          '200D',
          coin.price_change_percentage_200d_in_currency,
          '%',
        )}
      </div>
      <div className={classes.row}>
        {renderChange('1Y', coin.price_change_percentage_1y_in_currency, '%')}
      </div>
    </Card>
  );
}
