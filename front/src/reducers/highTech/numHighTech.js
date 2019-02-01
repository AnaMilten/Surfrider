import { initialNumHighTech } from '../constants';

const numHighTech = (state = initialNumHighTech, action) => {
  switch (action.type) {
    case 'ADD_HIGHTECH':
      return state + 1;
    default: return state;
  }
};

export default numHighTech;
