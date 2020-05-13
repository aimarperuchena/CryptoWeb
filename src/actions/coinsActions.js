import {
  READ_COINS_FAIL,
  READ_COINS_SUCCESS,
  READ_COINS_START,
  SHOW_COIN,
  SHOW_COIN_CHART_START,
  SHOW_COIN_CHART_SUCCESS,
  SHOW_COIN_CHART_FAIL,
} from '../reducers/types';
import clienteAxios from '../config/axios';

export function getCoins() {
  return async (dispatch) => {
    dispatch(getCoinsStart());
    try {
      const response = await clienteAxios.get(
        '/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=34&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y',
      );
      dispatch(getCoinsSucces(response.data));
    } catch (err) {
      dispatch(getCoinsFail());
    }
  };
}

const getCoinsStart = () => ({
  type: READ_COINS_START,
  payload: true,
});

const getCoinsSucces = (coins) => ({
  type: READ_COINS_SUCCESS,
  payload: coins,
});

const getCoinsFail = () => ({
  type: READ_COINS_FAIL,
  payload: true,
});

export function showCoin(coin, chartDays) {
  return (dispatch) => {
    dispatch(showCoinDispatch(coin));
  };
}

const showCoinDispatch = (coin) => ({
  type: SHOW_COIN,
  payload: coin,
});

export function showCoinChart(coin) {
  return async (dispatch) => {
    dispatch(showCoinChartStart());
    try {
      const response = await clienteAxios.get(
        `/coins/${coin}/market_chart?vs_currency=eur&days=1`,
      );
      dispatch(showCoinChartSuccess(response));
    } catch (err) {
      dispatch(showCoinChartFail());
    }
  };
}

const showCoinChartStart = () => ({
  type: SHOW_COIN_CHART_START,
  payload: true,
});

const showCoinChartSuccess = (data) => ({
  type: SHOW_COIN_CHART_SUCCESS,
  payload: data,
});

const showCoinChartFail = () => ({
  type: SHOW_COIN_CHART_FAIL,
  payload: true,
});
