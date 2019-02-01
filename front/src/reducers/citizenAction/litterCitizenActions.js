import { initialLitterCitizenAction, powerUpCitizenAction1, powerUpCitizenAction2 } from '../constants';

const litterCitizenActions = (state = initialLitterCitizenAction, action) => {
  switch (action.type) {
    case 'POWER_UP_CITIZEN_ACTION_1':
      return state + powerUpCitizenAction1;
    case 'POWER_UP_CITIZEN_ACTION_2':
      return state + powerUpCitizenAction2;
    default:
      return state;
  }
};
export default litterCitizenActions;
