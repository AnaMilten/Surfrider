import { initialLitterVolunteer, powerUpVolunteer1, powerUpVolunteer2 } from '../constants';

const litterVolunteer = (state = initialLitterVolunteer, action) => {
  switch (action.type) {
    case 'POWER_UP_VOLUNTEER_1':
      return state + powerUpVolunteer1;
    case 'POWER_UP_VOLUNTEER_2':
      return state + powerUpVolunteer2;
    default: return state;
  }
};

export default litterVolunteer;
