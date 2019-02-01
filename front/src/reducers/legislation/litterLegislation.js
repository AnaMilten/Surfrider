import { initialLitterLegislation, powerUpLegislation1, powerUpLegislation2 } from '../constants';

const litterLegislation = (state = initialLitterLegislation, action) => {
  switch (action.type) {
    case 'POWER_UP_LEGISLATION_1':
      return state + powerUpLegislation1;
    case 'POWER_UP_LEGISLATION_2':
      return state + powerUpLegislation2;
    default: return state;
  }
};

export default litterLegislation;
