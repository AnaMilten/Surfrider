import { initialNumOceanInitiative } from '../constants';

const numOceanInitiative = (state = initialNumOceanInitiative, action) => {
  switch (action.type) {
    case 'ADD_OCEANINITIATIVE':
      return state + 1;
    default: return state;
  }
};

export default numOceanInitiative;
