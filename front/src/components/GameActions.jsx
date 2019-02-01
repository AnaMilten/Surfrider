import React from 'react';
import './GameActions.scss';
import { Container, Row } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BtnAddPoints from '../containers/BtnAddPoints';
import PopHover from '../containers/infoPopHover/PopHover';
import TemplateModalVolunteer from '../containers/TemplateModalVolunteer';
import addVolunteer from '../actions/addVolunteer';
import imgVolunteer from '../asset/benevolebuste.png';
import TemplateModalActions from '../containers/TemplateModalActions';
import addOceanInitiative from '../actions/addOceanInitiative';
import imgOceanInitiative from '../asset/whiteflagIO.png';
import addRecyclingCenter from '../actions/addRecyclingCenter';
import imgRecyclingCenter from '../asset/resizecentredetri.png';
import addCitizenAction from '../actions/addCitizenAction';
import imgCitizenAction from '../asset/resizemegaphone.png';
import addHighTech from '../actions/addHighTech';
import imgTechnology from '../asset/resizeinnovationtechno.png';
import addLegislation from '../actions/addLegislation';
import imgLegislation from '../asset/resizelegislation.png';
import PowerUpsTemplate from '../containers/powerUps/PowerUpsTemplate';
import PowerClickTemplate from '../containers/powerUps/PowerClickTemplate';
import powerClick1 from '../actions/powerUps/powerClick1';
import powerClick2 from '../actions/powerUps/powerClick2';
import powerVolunteer1 from '../actions/powerUps/powerVolunteer1';
import powerVolunteer2 from '../actions/powerUps/powerVolunteer2';
import powerOceanInitiative1 from '../actions/powerUps/powerOceanInitiative1';
import powerOceanInitiative2 from '../actions/powerUps/powerOceanInitiative2';
import powerRecyclingCenter1 from '../actions/powerUps/powerRecyclingCenter1';
import powerRecyclingCenter2 from '../actions/powerUps/powerRecyclingCenter2';
import powerCitizenAction1 from '../actions/powerUps/powerCitizenAction1';
import powerCitizenAction2 from '../actions/powerUps/powerCitizenAction2';
import powerHighTech1 from '../actions/powerUps/powerHighTech1';
import powerHighTech2 from '../actions/powerUps/powerHighTech2';
import powerLegislation1 from '../actions/powerUps/powerLegislation1';
import powerLegislation2 from '../actions/powerUps/powerLegislation2';
import superhero50 from '../asset/superhero50.png';
import nodrink50 from '../asset/nodrink50.png';
import ufo50 from '../asset/ufo50.png';
import drone50 from '../asset/drone50.png';
import classroom50 from '../asset/classroom50.png';
import protest50 from '../asset/protest50.png';
import golem50 from '../asset/golem50.png';
import ticket50 from '../asset/ticket50.png';
import wheelbarrow50 from '../asset/wheelbarrow50.png';
import bag50 from '../asset/bag50.png';
import pizza50 from '../asset/pizza50.png';
import latex50 from '../asset/latex50.png';
import recyclingbin50 from '../asset/recyclingbin50.png';
import icon50 from '../asset/icon50.png';
import {
  costPowerClick1, costPowerClick2, costPowerVolunteer1,
  costPowerVolunteer2, costPowerOceanInitiative1, costPowerOceanInitiative2,
  costPowerRecyclingCenter1, costPowerRecyclingCenter2, costPowerCitizenAction1,
  costPowerCitizenAction2, costPowerLegislation1, costPowerLegislation2,
  costPowerHighTech1, costPowerHighTech2, initialPointsPerClick, powerUpClick1,
  powerUpClick2, initialLitterVolunteer, powerUpVolunteer1, powerUpVolunteer2,
  initialLitterOceanInitiative, powerUpOceanInitiative1, powerUpOceanInitiative2,
  initialLitterRecyclingCenter, powerUpRecyclingCenter1, powerUpRecyclingCenter2,
  initialLitterCitizenAction, powerUpCitizenAction1, powerUpCitizenAction2,
  initialLitterHighTech, powerUpHighTech1, powerUpHighTech2, initialLitterLegislation,
  powerUpLegislation1, powerUpLegislation2,
} from '../reducers/constants';
import contentModals from '../reducers/contentModals';
import contentPopHover from '../reducers/contentPopHover';

import constantPowerUp from '../reducers/constantPowerUp';

const GameActions = ({
  state, powerClick1, powerClick2, powerVolunteer1, powerVolunteer2, powerOceanInitiative1,
  powerOceanInitiative2, powerRecyclingCenter1, powerRecyclingCenter2, powerCitizenAction1,
  powerCitizenAction2, powerHighTech1, powerHighTech2, powerLegislation1, powerLegislation2,
  addVolunteer, addOceanInitiative, addRecyclingCenter, addCitizenAction, addHighTech,
  addLegislation,
}) => {
  const {
    modalVolunteer, modalOceanIntiatiative, modalRecyclingCenter, modalCitizenAction,
    modalHighTech, modalLegislation,
  } = contentModals;
  const {
    pophoverClick, pophoverVolunteer, pophoverOceanIntiatiative,
    pophoverRecyclingCenter, pophoverCitizenAction, pophoverHighTech, pophoverLegislation,
  } = contentPopHover;
  const {
    powerUpClick, powerUpVolunteer, powerUpOceanInitiative, powerUpRecyclingCenter,
    powerUpCitizenAction, powerUpHighTech, powerUpLegislation,
  } = constantPowerUp;
  return (
    <Container className="GameActions piper">
      <Row className="rowgame mr-0 ml-0 align-items-center title">
        <h5>AGIS !</h5>
      </Row>

      {/* Obtain points actions and power-ups */}
      <Row className="rowgame mr-0 ml-0 pb-1 align-items-center">
        <PopHover
          id="click"
          title={pophoverClick.title}
          text={pophoverClick.text}
          power1={pophoverClick.power1}
          power2={pophoverClick.power2}
        />
        <BtnAddPoints />
        <PowerClickTemplate
          title={powerUpClick.titleP1}
          powerClickAction={powerClick1}
          points={state.points}
          pointsPerClick={state.pointsPerClick}
          image={recyclingbin50}
          cost={costPowerClick1}
          customPointClick1={powerUpClick1 + initialPointsPerClick}
          customPointClick2={powerUpClick1 + powerUpClick2 + initialPointsPerClick}
        />
        <PowerClickTemplate
          title={powerUpClick.titleP2}
          powerClickAction={powerClick2}
          points={state.points}
          pointsPerClick={state.pointsPerClick}
          image={icon50}
          cost={costPowerClick2}
          customPointClick1={powerUpClick2 + initialPointsPerClick}
          customPointClick2={powerUpClick1 + powerUpClick2 + initialPointsPerClick}
        />
      </Row>

      {/* Volunteer action and power-ups */}
      <Row className="rowgame mr-0 ml-0 align-items-center">
        <PopHover
          id="volunteer"
          title={pophoverVolunteer.title}
          text={pophoverVolunteer.text}
          power1={pophoverVolunteer.power1}
          power2={pophoverVolunteer.power2}
        />
        <TemplateModalVolunteer
          addVariable={addVolunteer}
          costVariable={state.costVolunteer}
          numVariable={state.numVolunteer}
          litterVariable={state.litterVolunteer}
          points={state.points}
          title={modalVolunteer.title}
          text={modalVolunteer.text}
          link={modalVolunteer.link}
          textLink={modalVolunteer.textLink}
          image={imgVolunteer}
        />
        <PowerUpsTemplate
          title={powerUpVolunteer.titleP1}
          powerClickAction={powerVolunteer1}
          points={state.points}
          image={latex50}
          cost={costPowerVolunteer1}
          litterVariable={state.litterVolunteer}
          numVariable={state.numVolunteer}
          customValue1={powerUpVolunteer1 + initialLitterVolunteer}
          customValue2={powerUpVolunteer1 + powerUpVolunteer2 + initialLitterVolunteer}
        />
        <PowerUpsTemplate
          title={powerUpVolunteer.titleP2}
          powerClickAction={powerVolunteer2}
          points={state.points}
          image={pizza50}
          cost={costPowerVolunteer2}
          litterVariable={state.litterVolunteer}
          numVariable={state.numVolunteer}
          customValue1={powerUpVolunteer2 + initialLitterVolunteer}
          customValue2={powerUpVolunteer1 + powerUpVolunteer2 + initialLitterVolunteer}
        />
      </Row>

      {/* Ocean Initiative action and power-ups */}
      <Row className="rowgame mr-0 ml-0 align-items-center">
        <PopHover
          id="oceanInitiative"
          title={pophoverOceanIntiatiative.title}
          text={pophoverOceanIntiatiative.text}
          power1={pophoverOceanIntiatiative.power1}
          power2={pophoverOceanIntiatiative.power2}
        />
        <TemplateModalActions
          addVariable={addOceanInitiative}
          points={state.points}
          numVariable={state.numOceanInitiative}
          numVariable2={state.numVolunteer}
          costVariable={state.costOceanInitiative}
          litterVariable={state.litterOceanInitiative}
          title={modalOceanIntiatiative.title}
          text={modalOceanIntiatiative.text}
          link={modalOceanIntiatiative.link}
          textLink={modalOceanIntiatiative.textLink}
          image={imgOceanInitiative}
        />
        <PowerUpsTemplate
          title={powerUpOceanInitiative.titleP1}
          powerClickAction={powerOceanInitiative1}
          points={state.points}
          image={bag50}
          cost={costPowerOceanInitiative1}
          litterVariable={state.litterOceanInitiative}
          numVariable={state.numOceanInitiative}
          customValue1={powerUpOceanInitiative1 + initialLitterOceanInitiative}
          customValue2={powerUpOceanInitiative1 + powerUpOceanInitiative2
            + initialLitterOceanInitiative}
        />
        <PowerUpsTemplate
          title={powerUpOceanInitiative.titleP2}
          powerClickAction={powerOceanInitiative2}
          points={state.points}
          image={wheelbarrow50}
          cost={costPowerOceanInitiative2}
          litterVariable={state.litterOceanInitiative}
          numVariable={state.numOceanInitiative}
          customValue1={powerUpOceanInitiative2 + initialLitterOceanInitiative}
          customValue2={powerUpOceanInitiative1 + powerUpOceanInitiative2
            + initialLitterOceanInitiative}
        />
      </Row>

      {/* Recycling Center action and power-ups */}
      <Row className="rowgame mr-0 ml-0 align-items-center">
        <PopHover
          id="recyclingCenter"
          title={pophoverRecyclingCenter.title}
          text={pophoverRecyclingCenter.text}
          power1={pophoverRecyclingCenter.power1}
          power2={pophoverRecyclingCenter.power2}
        />
        <TemplateModalActions
          addVariable={addRecyclingCenter}
          points={state.points}
          numVariable={state.numRecyclingCenter}
          numVariable2={state.numOceanInitiative}
          costVariable={state.costRecyclingCenter}
          litterVariable={state.litterRecyclingCenter}
          title={modalRecyclingCenter.title}
          text={modalRecyclingCenter.text}
          link={modalRecyclingCenter.link}
          textLink={modalRecyclingCenter.textLink}
          image={imgRecyclingCenter}
        />
        <PowerUpsTemplate
          title={powerUpRecyclingCenter.titleP1}
          powerClickAction={powerRecyclingCenter1}
          points={state.points}
          image={ticket50}
          cost={costPowerRecyclingCenter1}
          litterVariable={state.litterRecyclingCenter}
          numVariable={state.numRecyclingCenter}
          customValue1={powerUpRecyclingCenter1 + initialLitterRecyclingCenter}
          customValue2={powerUpRecyclingCenter1 + powerUpRecyclingCenter2
            + initialLitterRecyclingCenter}
        />
        <PowerUpsTemplate
          title={powerUpRecyclingCenter.titleP2}
          powerClickAction={powerRecyclingCenter2}
          points={state.points}
          image={golem50}
          cost={costPowerRecyclingCenter2}
          litterVariable={state.litterRecyclingCenter}
          numVariable={state.numRecyclingCenter}
          customValue1={powerUpRecyclingCenter2 + initialLitterRecyclingCenter}
          customValue2={powerUpRecyclingCenter1 + powerUpRecyclingCenter2
            + initialLitterRecyclingCenter}
        />
      </Row>

      {/* Citizen Action action and power-ups */}
      <Row className="rowgame mr-0 ml-0 align-items-center">
        <PopHover
          id="actionCitoyenne"
          title={pophoverCitizenAction.title}
          text={pophoverCitizenAction.text}
          power1={pophoverCitizenAction.power1}
          power2={pophoverCitizenAction.power2}
        />
        <TemplateModalActions
          addVariable={addCitizenAction}
          points={state.points}
          numVariable={state.numCitizenActions}
          numVariable2={state.numRecyclingCenter}
          costVariable={state.costCitizenActions}
          litterVariable={state.litterCitizenActions}
          title={modalCitizenAction.title}
          text={modalCitizenAction.text}
          link={modalCitizenAction.link}
          textLink={modalCitizenAction.textLink}
          image={imgCitizenAction}
        />
        <PowerUpsTemplate
          title={powerUpCitizenAction.titleP1}
          powerClickAction={powerCitizenAction1}
          points={state.points}
          image={protest50}
          cost={costPowerCitizenAction1}
          litterVariable={state.litterCitizenActions}
          numVariable={state.numCitizenActions}
          customValue1={powerUpCitizenAction1 + initialLitterCitizenAction}
          customValue2={powerUpCitizenAction1 + powerUpCitizenAction2
            + initialLitterCitizenAction}
        />
        <PowerUpsTemplate
          title={powerUpCitizenAction.titleP2}
          powerClickAction={powerCitizenAction2}
          points={state.points}
          image={classroom50}
          cost={costPowerCitizenAction2}
          litterVariable={state.litterCitizenActions}
          numVariable={state.numCitizenActions}
          customValue1={powerUpCitizenAction2 + initialLitterCitizenAction}
          customValue2={powerUpCitizenAction1 + powerUpCitizenAction2
            + initialLitterCitizenAction}
        />
      </Row>

      {/* High-Tech action and power-ups */}
      <Row className="rowgame mr-0 ml-0 align-items-center">
        <PopHover
          id="hightTech"
          title={pophoverHighTech.title}
          text={pophoverHighTech.text}
          power1={pophoverHighTech.power1}
          power2={pophoverHighTech.power2}
        />
        <TemplateModalActions
          addVariable={addHighTech}
          points={state.points}
          numVariable={state.numHighTech}
          numVariable2={state.numCitizenActions}
          costVariable={state.costHighTech}
          litterVariable={state.litterHighTech}
          title={modalHighTech.title}
          text={modalHighTech.text}
          link={modalHighTech.link}
          textLink={modalHighTech.textLink}
          image={imgTechnology}
        />
        <PowerUpsTemplate
          title={powerUpHighTech.titleP1}
          powerClickAction={powerHighTech1}
          points={state.points}
          image={drone50}
          cost={costPowerHighTech1}
          litterVariable={state.litterHighTech}
          numVariable={state.numHighTech}
          customValue1={powerUpHighTech1 + initialLitterHighTech}
          customValue2={powerUpHighTech1 + powerUpHighTech2
            + initialLitterHighTech}
        />
        <PowerUpsTemplate
          title={powerUpHighTech.titleP2}
          powerClickAction={powerHighTech2}
          points={state.points}
          image={ufo50}
          cost={costPowerHighTech2}
          litterVariable={state.litterHighTech}
          numVariable={state.numHighTech}
          customValue1={powerUpHighTech2 + initialLitterHighTech}
          customValue2={powerUpHighTech1 + powerUpHighTech2
            + initialLitterHighTech}
        />
      </Row>

      {/* Legislation action and power-ups */}
      <Row className="rowgame mr-0 ml-0 align-items-center">
        <PopHover
          id="legislation"
          title={pophoverLegislation.title}
          text={pophoverLegislation.text}
          power1={pophoverLegislation.power1}
          power2={pophoverLegislation.power2}
        />
        <TemplateModalActions
          addVariable={addLegislation}
          points={state.points}
          numVariable={state.numLegislation}
          numVariable2={state.numHighTech}
          costVariable={state.costLegislation}
          litterVariable={state.litterLegislation}
          title={modalLegislation.title}
          text={modalLegislation.text}
          link={modalLegislation.link}
          textLink={modalLegislation.textLink}
          image={imgLegislation}
        />
        <PowerUpsTemplate
          title={powerUpLegislation.titleP1}
          powerClickAction={powerLegislation1}
          points={state.points}
          image={nodrink50}
          cost={costPowerLegislation1}
          litterVariable={state.litterLegislation}
          numVariable={state.numLegislation}
          customValue1={powerUpLegislation1 + initialLitterLegislation}
          customValue2={powerUpLegislation1 + powerUpLegislation2
            + initialLitterLegislation}
        />
        <PowerUpsTemplate
          title={powerUpLegislation.titleP2}
          powerClickAction={powerLegislation2}
          points={state.points}
          image={superhero50}
          cost={costPowerLegislation2}
          litterVariable={state.litterLegislation}
          numVariable={state.numLegislation}
          customValue1={powerUpLegislation2 + initialLitterLegislation}
          customValue2={powerUpLegislation1 + powerUpLegislation2
            + initialLitterLegislation}
        />
      </Row>
    </Container>
  );
};

function mstp(state) {
  return { state };
}

function mdtp(dispatch) {
  return bindActionCreators({
    powerClick1,
    powerClick2,
    powerVolunteer1,
    powerVolunteer2,
    powerOceanInitiative1,
    powerOceanInitiative2,
    powerRecyclingCenter1,
    powerRecyclingCenter2,
    powerCitizenAction1,
    powerCitizenAction2,
    powerHighTech1,
    powerHighTech2,
    powerLegislation1,
    powerLegislation2,
    addVolunteer,
    addOceanInitiative,
    addRecyclingCenter,
    addCitizenAction,
    addHighTech,
    addLegislation,
  }, dispatch);
}

export default connect(mstp, mdtp)(GameActions);
