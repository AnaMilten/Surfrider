import { initialNumCitizenAction } from '../constants';

const numCitizenActions = (state = initialNumCitizenAction, action) => {
  switch (action.type) {
    case 'ADD_CITIZENACTION':
      return state + 1;
    default:
      return state;
  }
};
export default numCitizenActions;
