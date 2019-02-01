import { initialLitterHighTech, powerUpHighTech1, powerUpHighTech2 } from '../constants';

const litterHighTech = (state = initialLitterHighTech, action) => {
  switch (action.type) {
    case 'POWER_HIGHTECH_1':
      return state + powerUpHighTech1;
    case 'POWER_HIGHTECH_2':
      return state + powerUpHighTech2;
    default:
      return state;
  }
};

export default litterHighTech;
