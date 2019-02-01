const clickCounter = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_POINTS':
      return state + 1;
    default:
      return state;
  }
};

export default clickCounter;
