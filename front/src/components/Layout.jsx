import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header';
import ScreenPlay from '../containers/ScreenPlay';
import GameActions from './GameActions';
import Footer from './Footer';
import './Layout.scss';
import BadgesNotifications from '../containers/BadgesNotifications';

const Layout = () => (
  <div className="Layout">
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <BadgesNotifications />
      </Row>
      <Row>
        <Col lg="8" sm="12">
          <ScreenPlay />
        </Col>
        <Col className="game-action" lg="4" sm="12">
          <GameActions />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  </div>
);

export default Layout;
