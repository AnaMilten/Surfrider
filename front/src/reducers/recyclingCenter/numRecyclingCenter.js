import { initialNumRecyclingCenter } from '../constants';

const numRecyclingCenter = (state = initialNumRecyclingCenter, action) => {
  switch (action.type) {
    case 'ADD_RECYCLING_CENTER': return state + 1;
    default: return state;
  }
};

export default numRecyclingCenter;
