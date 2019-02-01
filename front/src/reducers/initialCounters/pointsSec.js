import {
  initialPointsSec, initialPointsSecVolunteer, initialPointsSecLegislation,
  initialPointsSecRecyclingCenter, initialPointsSecCitizenAction, initialPointsSecHighTech,
  initialPointsSecOceanInitiative,
} from '../constants';

const pointsSec = (state = initialPointsSec, action) => {
  switch (action.type) {
    case 'ADD_VOLUNTEER':
      return state + initialPointsSecVolunteer;
    case 'ADD_OCEANINITIATIVE':
      return state + initialPointsSecOceanInitiative;
    case 'ADD_RECYCLING_CENTER':
      return state + initialPointsSecRecyclingCenter;
    case 'ADD_CITIZENACTION':
      return state + initialPointsSecCitizenAction;
    case 'ADD_LEGISLATION':
      return state + initialPointsSecLegislation;
    case 'ADD_HIGHTECH':
      return state + initialPointsSecHighTech;
    default:
      return state;
  }
};

export default pointsSec;
