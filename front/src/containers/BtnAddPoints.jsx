import React from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import addPoints from '../actions/addPoints';
import litter60 from '../asset/litter60.png';

const BtnAddPoints = ({ addPoints, pointsPerClick }) => (
  <Col lg="4" md="3" sm="3" xs="12">
    <p className="modal-text">
      <strong>
        Points
      </strong>
      <br />
      <img src={litter60} alt="litter" onClick={() => { addPoints(pointsPerClick); }} className="actions-icons" />
      <br />
      <strong>
        {`+ ${pointsPerClick}`}
      </strong>
    </p>
  </Col>
);

function mstp(state) {
  return {
    pointsPerClick: state.pointsPerClick,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({ addPoints }, dispatch);
}


export default connect(mstp, mdtp)(BtnAddPoints);
