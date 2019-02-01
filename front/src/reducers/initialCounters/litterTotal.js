import { initialLitterTotal } from '../constants';

const litterTotal = (state = initialLitterTotal, action) => {
  switch (action.type) {
    case 'UPDATE_LITTER':
      return Math.max(0, state + action.num);
    default:
      return state;
  }
};

export default litterTotal;
