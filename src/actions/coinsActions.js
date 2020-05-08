import {
  READ_COINS_FAIL,
  READ_COINS_SUCCESS,
  READ_COINS_START,
} from '../reducers/types';
import clienteAxios from '../config/axios';

export function readCoins() {
  return async (dispatch) => {
    dispatch(getCoins());
    try {
      const response = await clienteAxios.get(
        '/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=5&page=1&sparkline=true',
      );
      dispatch(getCoinsSucces(response.data));
    } catch (err) {
      dispatch(getCoinsFail());
    }
  };
}

const getCoins = () => ({
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
