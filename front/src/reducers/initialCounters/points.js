import {
  initialPoints, costPowerClick1, costPowerClick2, costPowerVolunteer1,
  costPowerVolunteer2, costPowerOceanInitiative1, costPowerOceanInitiative2,
  costPowerRecyclingCenter1, costPowerRecyclingCenter2, costPowerCitizenAction1,
  costPowerCitizenAction2, costPowerLegislation1, costPowerLegislation2,
  costPowerHighTech1, costPowerHighTech2,
} from '../constants';

const points = (state = initialPoints, action) => {
  switch (action.type) {
    case 'ADD_POINTS':
    case 'ADD_POINTS_SEC':
      return state + action.num;
    case 'ADD_VOLUNTEER':
    case 'ADD_OCEANINITIATIVE':
    case 'ADD_CITIZENACTION':
    case 'ADD_RECYCLING_CENTER':
    case 'ADD_LEGISLATION':
    case 'ADD_HIGHTECH':
      return state - action.cost;
    case 'POWER_CLICK_1':
      return state - costPowerClick1;
    case 'POWER_CLICK_2':
      return state - costPowerClick2;
    case 'POWER_UP_VOLUNTEER_1':
      return state - costPowerVolunteer1;
    case 'POWER_UP_VOLUNTEER_2':
      return state - costPowerVolunteer2;
    case 'POWER_UP_OCEAN_INITIATIVE_1':
      return state - costPowerOceanInitiative1;
    case 'POWER_UP_OCEAN_INITIATIVE_2':
      return state - costPowerOceanInitiative2;
    case 'POWER_UP_RECYCLING_CENTER_1':
      return state - costPowerRecyclingCenter1;
    case 'POWER_UP_RECYCLING_CENTER_2':
      return state - costPowerRecyclingCenter2;
    case 'POWER_UP_CITIZEN_ACTION_1':
      return state - costPowerCitizenAction1;
    case 'POWER_UP_CITIZEN_ACTION_2':
      return state - costPowerCitizenAction2;
    case 'POWER_UP_LEGISLATION_1':
      return state - costPowerLegislation1;
    case 'POWER_UP_LEGISLATION_2':
      return state - costPowerLegislation2;
    case 'POWER_HIGHTECH_1':
      return state - costPowerHighTech1;
    case 'POWER_HIGHTECH_2':
      return state - costPowerHighTech2;
    default:
      return state;
  }
};

export default points;
