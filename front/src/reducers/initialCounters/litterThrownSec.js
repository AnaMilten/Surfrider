import { initialLitterThrownSec } from '../constants';

const litterThrownSec = (state = initialLitterThrownSec, action) => {
  switch (action.type) {
    case 'ADD_RECYCLING_CENTER':
      return Math.max(0, state - action.litter);
    case 'ADD_CITIZENACTION':
      return Math.max(0, state - action.litter);
    case 'ADD_LEGISLATION':
      return Math.max(0, state - action.litter);
    case 'ADD_HIGHTECH':
      return Math.max(0, state - action.litter);
    default:
      return state;
  }
};

export default litterThrownSec;
