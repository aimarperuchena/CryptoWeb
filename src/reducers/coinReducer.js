import {
  READ_COINS_FAIL,
  READ_COINS_SUCCESS,
  READ_COINS_START,
  SHOW_COIN,
  SHOW_COIN_CHART_START,
  SHOW_COIN_CHART_SUCCESS,
  SHOW_COIN_CHART_FAIL,
} from './types';

const initialState = {
  coins: [],
  coin: [],
  coin_chart: [],
  chart_days: 1,

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
    case SHOW_COIN_CHART_FAIL:
    case READ_COINS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SHOW_COIN:
        return {
        ...state,
        coin: action.payload,
      };
    case SHOW_COIN_CHART_START:
      return {
        ...state,
        loading: true,
      };
    case SHOW_COIN_CHART_SUCCESS:
      return {
        loading: false,
        error: false,
        coin_chart: action.payload,
      };

    default:
      return state;
  }
}
