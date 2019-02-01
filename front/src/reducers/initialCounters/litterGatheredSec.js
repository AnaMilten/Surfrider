import { initialLitterGatheredSec } from '../constants';

const litterGatheredSec = (state = initialLitterGatheredSec, action) => {
  switch (action.type) {
    case 'ADD_VOLUNTEER':
      return state + action.litter;
    case 'ADD_OCEANINITIATIVE':
      return state + action.litter;
    default:
      return state;
  }
};

export default litterGatheredSec;
