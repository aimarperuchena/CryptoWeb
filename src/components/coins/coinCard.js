import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    margin: 5,
    cursor: 'pointer',
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  lineChart: {
    height: 100,
    width: 200,
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-between',
  },
  coinImg: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 10,
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
}));

export default function CoinCard(props) {
  const coin = props.coin;
  const classes = useStyles();
  const cardClick = () => {
    props.onClickHandler(coin);
  };
  return (
    <Card className={classes.root} onClick={cardClick}>
      <CardContent>
        <div className={classes.cardRow}>
          <Typography variant="h5" component="h2">
            {coin.current_price} €
          </Typography>

          {coin.price_change_percentage_24h > 0 ? (
            <Typography variant="h6" component="h6" className={classes.green}>
              {coin.price_change_percentage_24h.toFixed(2)} %
            </Typography>
          ) : (
            <Typography variant="h6" component="h6" className={classes.red}>
              {coin.price_change_percentage_24h.toFixed(2)} %
            </Typography>
          )}
        </div>

        <div className={classes.cardRow}>
          <Typography>{coin.name}</Typography>

          <Avatar
            alt={coin.image}
            src={coin.image}
            className={classes.coinImg}
          />
        </div>
      </CardContent>
    </Card>
  );
}
