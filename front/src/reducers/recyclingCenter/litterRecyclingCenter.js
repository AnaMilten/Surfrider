import { initialLitterRecyclingCenter, powerUpRecyclingCenter1, powerUpRecyclingCenter2 } from '../constants';

const litterRecyclingCenter = (state = initialLitterRecyclingCenter, action) => {
  switch (action.type) {
    case 'POWER_UP_RECYCLING_CENTER_1':
      return state + powerUpRecyclingCenter1;
    case 'POWER_UP_RECYCLING_CENTER_2':
      return state + powerUpRecyclingCenter2;
    default: return state;
  }
};

export default litterRecyclingCenter;
