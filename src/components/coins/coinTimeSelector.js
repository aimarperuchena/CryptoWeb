import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 20,
    WebkitBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    MozBoxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    boxShadow: '0px 0px 22px -5px rgba(209,190,209,1)',
    height: 60,
    width: '60%',
    marginRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    border: '1px solid black',
    borderRadius: 25,
    height: 50,
    width: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 'auto',
    cursor: 'pointer',
  },

  text: {
    margin: 'auto',
    cursor: 'pointer',
  },
}));

export default function TimeSelector(props) {
  

  const classes = useStyles();
  const ClickHandler = (time) => {
    
    props.onClick(time);
  };
  const renderButton = (time, title) => {
    return (
      <div className={classes.button} onClick={() => ClickHandler(time)}>
        <b className={classes.text}>{title}</b>
      </div>
    );
  };
  return (
    <Card className={classes.root}>
      {renderButton(1, '1D')}
      {renderButton(7, '7D')}
      {renderButton(30, '1M')}
      {renderButton(180, '6M')}
      {renderButton(300, '12M')}
      {renderButton('max', 'MAX')}
    </Card>
  );
}
