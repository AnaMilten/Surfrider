import { initialNumLegislation } from '../constants';

const numLegislation = (state = initialNumLegislation, action) => {
  switch (action.type) {
    case 'ADD_LEGISLATION': return state + 1;
    default: return state;
  }
};

export default numLegislation;
