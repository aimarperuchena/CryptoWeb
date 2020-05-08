import { READ_COINS_FAIL, READ_COINS_SUCCESS, READ_COINS_START } from './types';

const initialState = {
  coins: [],
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
    default:
      return state;
  }
}
