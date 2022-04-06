import * as types from './types';

export const setTicketList= (payload) => {
  return {
    type: types.SET_TICKET,
    payload,
  };
};