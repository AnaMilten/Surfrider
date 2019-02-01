import React, { Component } from 'react';
import './ScreenPlay.scss';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addPoints from '../actions/addPoints';
import InitialStat from './InitialStat';
import imgVolunteer from '../asset/benevolebuste.png';
import imgOceanInitiative from '../asset/whiteflagIO.png';
import imgRecyclingCenter from '../asset/recyclingcenterzoom.png';
import imgCitizenAction from '../asset/resizemegaphone.png';
import imgLegislation from '../asset/resizelegislation.png';
import imgTechnology from '../asset/resizeinnovationtechno.png';
import dechets from '../asset/dechets-vectoriel-light.png';
import dechets1 from '../asset/dechets1.png';
import dechets2 from '../asset/dechets2.png';
import dechets3 from '../asset/dechets3.png';
import dechets4 from '../asset/dechets4.png';
import dechets5 from '../asset/dechets5.png';
import dechets6 from '../asset/dechets6.png';
import dechets7 from '../asset/dechets7.png';
import bouteille from '../asset/bouteille.png';

class ScreenPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true,
    };
  }

  clickAnimation() {
    const { pointsPerClick, addPoints } = this.props;
    addPoints(pointsPerClick);
    this.setState(prevState => ({
      on: !prevState.on,
    }));
  }


  render() {
    const {
      pointsPerClick, numVolunteer, numOceanInitiative, numRecyclingCenter,
      numCitizenActions, numLegislation, numHighTech, litterThrownSec, litterTotal,
    } = this.props;
    const { on } = this.state;
    const cssVolunteer = (numVolunteer === 0) ? 'hidden' : 'enabled';
    const cssOceanInitiative = (numOceanInitiative === 0) ? 'hidden' : 'enabled';
    const cssRecyclingCenter = (numRecyclingCenter === 0) ? 'hidden' : 'enabled';
    const cssCitizenActions = (numCitizenActions === 0) ? 'hidden' : 'enabled';
    const cssLegislation = (numLegislation === 0) ? 'hidden' : 'enabled';
    const cssHighTech = (numHighTech === 0) ? 'hidden' : 'enabled';
    const cssAnimation = on ? 'bottle hidden' : 'bottle animated bombRightOut';

    let ocean = '';
    switch (true) {
      case (litterTotal <= 20000):
        ocean = 'fish';
        break;
      case (litterThrownSec <= 0):
        ocean = 'bleu';
        break;
      case (litterThrownSec <= 75000):
        ocean = 'gris-bleu';
        break;
      case (litterThrownSec <= 175000):
        ocean = 'vert-bleu';
        break;
      case (litterThrownSec <= 206000):
        ocean = 'vert';
        break;
      default:
        ocean = 'vert';
    }

    let pollution = '';
    switch (true) {
      case (litterTotal <= 1000000):
        pollution = dechets7;
        break;
      case (litterThrownSec === 0):
        pollution = dechets6;
        break;
      case (litterThrownSec <= 75000):
        pollution = dechets5;
        break;
      case (litterThrownSec <= 120000):
        pollution = dechets4;
        break;
      case (litterThrownSec <= 130000):
        pollution = dechets3;
        break;
      case (litterThrownSec <= 175000):
        pollution = dechets2;
        break;
      case (litterThrownSec <= 200000):
        pollution = dechets1;
        break;
      case (litterThrownSec <= 206000):
        pollution = dechets;
        break;
      default:
        pollution = dechets;
    }

    let lastimage = '';
    switch (true) {
      case (litterTotal === 0):
        lastimage = (
          <div />);
        break;
      default:
        lastimage = (
          <div className="garbage-position one">
            <h1>
            +
              {pointsPerClick}
            </h1>
            <img className={`bottle ${cssAnimation}`} src={bouteille} alt="plasticbottle" />
            <img className="garbage vibrate-1" onClick={() => this.clickAnimation()} src={pollution} alt="Déchets" />
          </div>);
    }

    return (
      <Container className={`ScreenPlay piper mb-2 ${ocean}`}>
        <InitialStat />
        {lastimage}
        <Row className="counters align-items-end">
          <Col lg="2" xs="4" className={cssVolunteer}>
            {numVolunteer}
            &nbsp;
            <img src={imgVolunteer} responsive className="actions-icons" alt="Volunteer" />
          </Col>
          <Col lg="2" xs="4" className={cssOceanInitiative}>
            {numOceanInitiative}
            &nbsp;
            <img src={imgOceanInitiative} responsive className="actions-icons" alt="Ocean Initiative" />
          </Col>
          <Col lg="2" xs="4" className={cssRecyclingCenter}>
            {numRecyclingCenter}
            &nbsp;
            <img src={imgRecyclingCenter} responsive className="actions-icons" alt="Recycling Center" />
          </Col>
          <Col lg="2" xs="4" className={cssCitizenActions}>
            {numCitizenActions}
            &nbsp;
            <img src={imgCitizenAction} responsive className="actions-icons" alt="Citizen Action" />
          </Col>
          <Col lg="2" xs="4" className={cssHighTech}>
            {numHighTech}
            &nbsp;
            <img src={imgTechnology} responsive className="actions-icons" alt="Technology" />
          </Col>
          <Col lg="2" xs="4" className={cssLegislation}>
            {numLegislation}
            &nbsp;
            <img src={imgLegislation} responsive className="actions-icons" alt="Legislation" />
          </Col>
        </Row>
      </Container>

    );
  }
}

function mstp(state) {
  return {
    pointsPerClick: state.pointsPerClick,
    numVolunteer: state.numVolunteer,
    numOceanInitiative: state.numOceanInitiative,
    numRecyclingCenter: state.numRecyclingCenter,
    numCitizenActions: state.numCitizenActions,
    numLegislation: state.numLegislation,
    numHighTech: state.numHighTech,
    litterThrownSec: state.litterThrownSec,
    litterTotal: state.litterTotal,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({ addPoints }, dispatch);
}

export default connect(mstp, mdtp)(ScreenPlay);
