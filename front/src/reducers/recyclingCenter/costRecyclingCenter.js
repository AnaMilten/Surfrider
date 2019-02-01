import { initialCostRecyclingCenter } from '../constants';

const costRecyclingCenter = (state = initialCostRecyclingCenter, action) => {
  switch (action.type) {
    case 'ADD_RECYCLING_CENTER':
      return Math.ceil(state * 1.15);
    default: return state;
  }
};

export default costRecyclingCenter;
