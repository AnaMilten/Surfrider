import { initialLitterOceanInitiative, powerUpOceanInitiative1, powerUpOceanInitiative2 } from '../constants';

const litterOceanInitiative = (state = initialLitterOceanInitiative, action) => {
  switch (action.type) {
    case 'POWER_UP_OCEAN_INITIATIVE_1':
      return state + powerUpOceanInitiative1;
    case 'POWER_UP_OCEAN_INITIATIVE_2':
      return state + powerUpOceanInitiative2;
    default: return state;
  }
};

export default litterOceanInitiative;
