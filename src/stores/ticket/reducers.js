import * as types from './types';

const initialState = {
  ticketList: [],
};

const ticketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_TICKET:
      return {
        ...state,
        ticketList: payload,
      };
    default:
      return state;
  }
};

export default ticketReducer;