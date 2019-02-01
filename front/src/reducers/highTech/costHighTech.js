import { initialCostHighTech } from '../constants';

const costHighTech = (state = initialCostHighTech, action) => {
  switch (action.type) {
    case 'ADD_HIGHTECH':
      return Math.ceil(state * 1.25);
    default: return state;
  }
};

export default costHighTech;
