import { initialNumVolunteer } from '../constants';

const numVolunteer = (state = initialNumVolunteer, action) => {
  switch (action.type) {
    case 'ADD_VOLUNTEER':
      return state + 1;
    default:
      return state;
  }
};

export default numVolunteer;
