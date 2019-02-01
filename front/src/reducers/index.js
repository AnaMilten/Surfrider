import { combineReducers } from 'redux';
import litterGatheredSec from './initialCounters/litterGatheredSec';
import litterThrownSec from './initialCounters/litterThrownSec';
import litterTotal from './initialCounters/litterTotal';
import points from './initialCounters/points';
import pointsSec from './initialCounters/pointsSec';
import timeElapsed from './initialCounters/timeElapsed';
import numVolunteer from './Volunteer/numVolunteer';
import costVolunteer from './Volunteer/costVolunteer';
import litterVolunteer from './Volunteer/litterVolunteer';
import costOceanInitiative from './oceanInitiative/costOceanInitiative';
import numOceanInitiative from './oceanInitiative/numOceanInitiative';
import litterOceanInitiative from './oceanInitiative/litterOceanInitiative';
import costRecyclingCenter from './recyclingCenter/costRecyclingCenter';
import numRecyclingCenter from './recyclingCenter/numRecyclingCenter';
import costLegislation from './legislation/costLegislation';
import numLegislation from './legislation/numLegislation';
import numCitizenActions from './citizenAction/numCitizenAction';
import costCitizenActions from './citizenAction/costCitizenAction';
import numHighTech from './highTech/numHighTech';
import costHighTech from './highTech/costHighTech';
import pointsPerClick from './initialCounters/pointsPerClick';
import litterCitizenActions from './citizenAction/litterCitizenActions';
import litterHighTech from './highTech/litterHighTech';
import litterLegislation from './legislation/litterLegislation';
import litterRecyclingCenter from './recyclingCenter/litterRecyclingCenter';
import clickCounter from './initialCounters/clickCounter';

const allReducers = combineReducers({
  litterGatheredSec,
  litterThrownSec,
  litterTotal,
  points,
  pointsSec,
  pointsPerClick,
  timeElapsed,
  numVolunteer,
  costVolunteer,
  litterVolunteer,
  costOceanInitiative,
  numOceanInitiative,
  litterOceanInitiative,
  costRecyclingCenter,
  numRecyclingCenter,
  litterRecyclingCenter,
  costLegislation,
  numLegislation,
  numCitizenActions,
  costCitizenActions,
  numHighTech,
  costHighTech,
  litterCitizenActions,
  litterHighTech,
  litterLegislation,
  clickCounter,
});

export default allReducers;
