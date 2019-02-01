import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addPoints from '../actions/addPoints';
import './BtnAddPointsCheating.css';
import logoH2Code from '../asset/H2Code.png';

const BtnAddPointsCheating = ({ addPoints }) => (
  <div>
    <img src={logoH2Code} alt="imgWcs" className="cheatbutton" onClick={() => addPoints(1000000000)} />
  </div>
);


function mdtp(dispatch) {
  return bindActionCreators({ addPoints }, dispatch);
}


export default connect(null, mdtp)(BtnAddPointsCheating);
