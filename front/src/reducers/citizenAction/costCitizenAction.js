import { initialCostCitizenAction } from '../constants';

const costCitizenActions = (state = initialCostCitizenAction, action) => {
  switch (action.type) {
    case 'ADD_CITIZENACTION':
      return Math.ceil(state * 1.15);
    default:
      return state;
  }
};
export default costCitizenActions;
