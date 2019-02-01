import { initialCostOceanInitiative } from '../constants';

const costOceanInitiative = (state = initialCostOceanInitiative, action) => {
  switch (action.type) {
    case 'ADD_OCEANINITIATIVE':
      return Math.ceil(state * 1.1);
    default: return state;
  }
};

export default costOceanInitiative;
