import React from 'react';
import './Footer.scss';
import { Container, Row, Col } from 'reactstrap';
import BestScore from './BestScore';
import BtnAddPointsCheating from '../containers/BtnAddPointsCheating';
import Informations from './Informations';
import MyLocalStorage from './MyLocalStorage';
import logoWild from '../img/logo_pink.png';
import logoSfe from '../img/logo-sfe.png';


const Footer = () => (
  <Container fluid className="Footer pt-3 pb-1 ">
    <Row className="align-items-center justify-content-center">
      <Col className="pr-0 pl-0 pointer" lg="2" xs="4">
        <MyLocalStorage />
      </Col>
      <Col className="pl-0 pointer" lg="1" xs="4">
        <BestScore />
      </Col>
      <Col lg="1" xs="4" className="extrasdeux pointer">
        <Informations />
      </Col>
      <Col lg="4" xs="12">
        <h2 className="ocean-cleaner">OCEAN'S ZERO : THE GAME</h2>
      </Col>
      <Col lg="1" xs="4">
        <a href="https://wildcodeschool.fr/" target="blank">
          <img className="logowcs" src={logoWild} alt="logo wild code school" />
        </a>
      </Col>
      <Col lg="1" xs="4">
        <a href="https://www.surfrider.eu/" target="blank">
          <img className="logo" src={logoSfe} alt="imgSurfrider" />
        </a>
      </Col>
      <Col lg="2" xs="4">
        <BtnAddPointsCheating />
      </Col>
    </Row>
  </Container>);

export default Footer;
