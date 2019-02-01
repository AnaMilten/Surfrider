import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import './App.scss';
import Layout from './components/Layout';


const App = ({ points }) => (
  <DocumentTitle title={`${points.toLocaleString('fr-FR')} pts - Ocean's Zero : The Game`}>
    <div className="App">
      <Layout />
    </div>
  </DocumentTitle>
);

function mstp(state) {
  return {
    points: state.points,
  };
}

export default connect(mstp)(App);
