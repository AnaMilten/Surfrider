import { initialCostVolunteer } from '../constants';

const costVolunteer = (state = initialCostVolunteer, action) => {
  switch (action.type) {
    case 'ADD_VOLUNTEER':
      return Math.ceil(state * 1.1);
    default:
      return state;
  }
};

export default costVolunteer;
