import { initialCostLegislation } from '../constants';

const costLegislation = (state = initialCostLegislation, action) => {
  switch (action.type) {
    case 'ADD_LEGISLATION': return Math.ceil(state * 1.2);
    default: return state;
  }
};

export default costLegislation;
