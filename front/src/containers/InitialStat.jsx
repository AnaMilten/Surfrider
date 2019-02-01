import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addPointsSec from '../actions/addPointsSec';
import './InitialStat.scss';

class InitialStat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      end: false,
    };
  }

  componentDidMount() {
    this.startCounters();
  }

  componentDidUpdate() {
    const { end } = this.state;
    const { litterTotal } = this.props;

    if (litterTotal === 0 && !end) {
      clearInterval(this.Counter);
      this.endCounter();
    }
  }

  endCounter() {
    this.setState(prevState => ({
      end: !prevState.end,
    }));
  }

  startCounters() {
    this.Counter = setInterval(() => {
      const {
        addPointsSec, pointsSec,
      } = this.props;
      addPointsSec(pointsSec);
    }, 1000);
  }

  render() {
    const {
      litterGatheredSec, litterThrownSec, points, pointsSec,
    } = this.props;
    return (
      <Container className="InitialStat">
        <Row>
          <Col className="block-initial" md="6">
            <p className="light-block">
              DECHETS JETES / SEC :
              {' '}
              {litterThrownSec.toLocaleString('fr-FR')}
            </p>
            <p className="light-block">
              DECHETS RAMASSES / SEC :
              {' '}
              {litterGatheredSec.toLocaleString('fr-FR')}
            </p>
          </Col>
          <Col className="block-initial" md="6">
            <p className="light-block">
              POINTS D&#39;ACTIONS :
              {' '}
              {points.toLocaleString('fr-FR')}
            </p>
            <p className="light-block">
              POINTS GAGNES / SEC :
              {' '}
              {pointsSec.toLocaleString('fr-FR')}
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mstp(state) {
  return {
    litterGatheredSec: state.litterGatheredSec,
    litterThrownSec: state.litterThrownSec,
    litterTotal: state.litterTotal,
    points: state.points,
    pointsSec: state.pointsSec,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({ addPointsSec }, dispatch);
}

export default connect(mstp, mdtp)(InitialStat);
