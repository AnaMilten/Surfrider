import { initialPointsPerClick, powerUpClick1, powerUpClick2 } from '../constants';

const pointsPerClick = (state = initialPointsPerClick, action) => {
  switch (action.type) {
    case 'POWER_CLICK_1': return state + powerUpClick1;
    case 'POWER_CLICK_2': return state + powerUpClick2;
    default: return state;
  }
};

export default pointsPerClick;
