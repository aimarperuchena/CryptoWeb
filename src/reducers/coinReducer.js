import {
  READ_COINS_FAIL,
  READ_COINS_SUCCESS,
  READ_COINS_START,
  SHOW_COIN,
} from './types';

const initialState = {
  coins: [],
  coin: [],
  coin_chart: [],

  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case READ_COINS_START:
      return {
        ...state,
        loading: true,
      };
    case READ_COINS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        coins: action.payload,
      };
    case READ_COINS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SHOW_COIN:
      console.log('reducer SHOW_COIN_INFO')
      return {
        ...state,
        coin:action.payload,
      };
    default:
      return state;
  }
}
