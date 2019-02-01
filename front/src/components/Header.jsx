import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Input, Label, FormFeedback,
} from 'reactstrap';
import moment from 'moment';
import Odometer from 'react-odometerjs';
import updateLitter from '../actions/updateLitter';
import './Header.scss';
import firstmedal from '../asset/firstmedal.png';
import bronzemedal from '../asset/bronzemedal.png';
import silvermedal from '../asset/silvermedal.png';
import goldmedal from '../asset/goldmedal.png';
import { varServer } from '../constants';
import goldcup from '../asset/goldcup.png';
import bannedWords from '../reducers/bannedWords';

import 'odometer/themes/odometer-theme-minimal.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      end: false,
      pseudo: '',
      bannedWords,
      seconds: moment.unix(0).utc(),
      backdrop: false,
      ranking: [],
      pseudoFeedback: '',
      on: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Check if localStorage contains data on pseudo and seconds
    const getPseudoStorage = localStorage.getItem('pseudo');
    if (getPseudoStorage !== null) {
      this.setState({ pseudo: getPseudoStorage });
    }
    const getSecondsStorage = localStorage.getItem('seconds');
    if (getSecondsStorage !== null) {
      this.setState({ seconds: moment.utc(JSON.parse(getSecondsStorage)) });
    }
    // Open introductory Modal
    this.toggle();
  }

  componentDidUpdate() {
    const { end, seconds } = this.state;
    const { litterTotal } = this.props;

    // Update seconds in localStorage
    localStorage.setItem('seconds', JSON.stringify(seconds));

    if (litterTotal === 0 && !end) {
      clearInterval(this.Interval);
      this.endGame();
    }
  }

  toggle() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  toggle2() {
    const { modal2 } = this.state;
    this.setState({
      modal2: !modal2,
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      pseudo: event.target.value,
    });
  }

  startCounters() {
    setInterval(() => {
      const {
        updateLitter, litterThrownSec, litterGatheredSec,
      } = this.props;
      updateLitter(litterThrownSec - litterGatheredSec);
    }, 1000);
  }

  startGame() {
    const { pseudo, bannedWords } = this.state;
    if (!bannedWords.includes(pseudo.toLowerCase())) {
      this.toggle();
      this.startCounters();
      this.Interval = setInterval(() => {
        this.setState(prevState => ({
          seconds: prevState.seconds.add(1, 's'),
        }));
      }, 1000);
      // Add Pseudo to localStorage when game starts
      localStorage.setItem('pseudo', pseudo);
    } else {
      this.setState({
        pseudoFeedback: 'Insérez un pseudo valide',
      });
    }
  }

  endGame() {
    const { pseudo, seconds } = this.state;
    const {
      clickCounter, numVolunteer, numOceanInitiative,
      numRecyclingCenter, numCitizenActions, numLegislation, numHighTech,
    } = this.props;
    const score = {
      pseudo,
      game_time: seconds.format('HH:mm:ss'),
      click_total: clickCounter,
      volunteer_total: numVolunteer,
      ocean_initiative_total: numOceanInitiative,
      recycling_center_total: numRecyclingCenter,
      citizen_action_total: numCitizenActions,
      law_total: numLegislation,
      technologic_innovation_total: numHighTech,
    };
    const url = `${varServer}players`;
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    };
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          this.setState(prevState => ({
            end: !prevState.end,
            modal2: !prevState.modal2,
          }));
        }
      });
  }

  fetchRanking() {
    const { pseudo, seconds } = this.state;
    const { clickCounter } = this.props;
    this.setState({ on: true });
    fetch(`${varServer}players/score?pseudo=${pseudo}&clic=${clickCounter}&temps=${seconds.format('HH:mm:ss')}`)
      .then(res => res.json())
      .then(data => this.setState({ ranking: data[0] }));
  }

  finalClick() {
    this.stateRemove = localStorage.removeItem('state');
    this.pseudoRemove = localStorage.removeItem('pseudo');
    this.secondsRemove = localStorage.removeItem('seconds');
    window.location.reload();
  }

  render() {
    const {
      litterTotal, litterThrownSec, clickCounter, numVolunteer, numOceanInitiative,
      numRecyclingCenter, numCitizenActions, numLegislation, numHighTech,
    } = this.props;
    const {
      modal, modal2, pseudo, seconds, backdrop, ranking, pseudoFeedback, on,
    } = this.state;
    const firstMedalColor = (litterThrownSec <= 206000) ? 'enabled' : 'disabled';
    const bronzeMedalColor = (litterThrownSec <= 175000) ? 'enabled' : 'disabled';
    const silverMedalColor = (litterThrownSec <= 75000) ? 'enabled' : 'disabled';
    const goldMedalColor = (litterThrownSec === 0) ? 'enabled' : 'disabled';
    const cup = (on === true) ? '' : 'ranking';

    return (
      <Container fluid>
        <Row className="Header">
          <Col lg="3">
            <h4 className="block">
              TOTAL DECHETS:
              {' '}
              <Odometer
                animation="count"
                format="d"
                duration={1000}
                value={litterTotal}
              />
            </h4>
          </Col>
          <Col lg="2">
            <img className={firstMedalColor} src={firstmedal} alt="price" />
            <img className={bronzeMedalColor} src={bronzemedal} alt="price" />
          </Col>
          <Col lg="2">
            <h3 className="block">
              {pseudo}
            </h3>
          </Col>
          <Col lg="2">
            <img className={silverMedalColor} src={silvermedal} alt="price" />
            <img className={goldMedalColor} src={goldmedal} alt="price" />
          </Col>
          <Col className="time" lg="3">
            <h4 className="block">
              TEMPS ECOULE : &nbsp;
              {seconds.format('HH:mm:ss')}
            </h4>
          </Col>
        </Row>
        <div>
          <Modal isOpen={modal} className="piper" backdrop={backdrop}>
            <ModalHeader className="modalHeader">Bienvenue sur Ocean's Zero : The Game </ModalHeader>
            <ModalBody>
              <Form onSubmit={e => e.preventDefault()}>
                <FormGroup>
                  <Label for="pseudo">Rentre ton Pseudo :</Label>
                  <Input
                    className="pseudoInput"
                    type="text"
                    nom="pseudo"
                    id="pseudo"
                    placeholder="Pseudo"
                    onChange={this.handleChange}
                    value={pseudo}
                    required
                    invalid
                    maxlength="15"
                  />
                  <FormFeedback>{pseudoFeedback}</FormFeedback>
                </FormGroup>
              </Form>
              <div style={{ textAlign: 'justify', textWrap: 'wrap' }} className="modal-scroll">
                <p>
                  L’océan a besoin de toi !
                  <br />
                  Depuis des années, l’espèce humaine génère des déchets à une échelle
                  astronomique, le huitième continent est maintenant de plus en plus étendu,
                  il faut agir vite !
                  <br />
                  Clique sur le déchet au milieu de l’océan afin de commencer le ramassage des
                  détritus, le but est qu’ils soient tous ramassés le plus rapidement possible.
                  <br />
                  Pour t’aider, tu vas pouvoir débloquer des actions qui t’aideront dans ta
                  collecte des déchets ou qui réduiront le nombre de déchets rejetés.
                  <br />
                  Pour optimiser l’efficacité de ces actions, des powers-ups se rapportant à
                  chacune d’entre elles apparaitront au fur et à mesure de ta collecte
                  n’oublie pas de les utiliser !
                  <br />
                  <br />
                  Bonne chance, la planète compte sur toi !
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={() => { this.startGame(); }}>Commencer le jeu</Button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={modal2} className="piper" backdrop={backdrop}>
            <ModalHeader style={{ textAlign: 'center' }}>
              <span role="img" aria-label="img"> 🌟 </span>
              Félicitation, l&#39;océan est nettoyé, c&#39;est grâce à toi et à tes choix
               d&#39;actions !
              <span role="img" aria-label="img"> 🌟 </span>
            </ModalHeader>
            <ModalBody style={{ textAlign: 'justify', textWrap: 'wrap' }}>
              Super, tu as mené le difficile combat contre la pollution des espaces
               lacustres en&nbsp;
              <strong>{seconds.format('HH:mm:ss')}</strong>
              &nbsp;!
              <br />
              Tu as cliqué&nbsp;
              <strong>{clickCounter}</strong>
              &nbsp;fois sur le déchet ! Quelle énergie 🏆
              <br />
              <br />
              <strong>Tes statistiques finales sur cette partie :</strong>
              <br />
              Nombre de bénévoles recrutés :&nbsp;
              <strong>{numVolunteer}</strong>
              <br />
              Nombre d&#39;initiatives océane organisées :&nbsp;
              <strong>{numOceanInitiative}</strong>
              <br />
              Nombre de centre de tri construits :&nbsp;
              <strong>{numRecyclingCenter}</strong>
              <br />
              Nombre d&#39;actions citoyennes menées :&nbsp;
              <strong>{numCitizenActions}</strong>
              <br />
              Nombre d&#39;innovations technologiques créées :&nbsp;
              <strong>{numHighTech}</strong>
              <br />
              Nombre de législations votées :&nbsp;
              <strong>{numLegislation}</strong>
              <br />
              <br />
              Ces statistiques pourraient surement être améliorées...
               Recommence et challenge tes amis !
              <br />
              <br />
              Dans la réalité, tu peux retrouver l&#39;ensemble de ces actions et mener toi
              aussi le combat contre la pollution et la génération des déchets en suivant les
              liens donnés dans l&#39;onglet &#39;Agissez !&#39; ou bien en te rendant
              directement sur notre site ! A bientôt 😉 🏄‍
              <br />
              <br />
              <div className={cup}>
                <p className="title-ranking">Classement</p>
                <img className="gold-cup img-fluid" src={goldcup} alt="goldcup" />
                <br />
                <p className="number-ranking">{ranking.rank}</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={() => this.fetchRanking()}>Classement</Button>
              <Button color="info" onClick={() => this.finalClick()}>Recommencer</Button>
            </ModalFooter>
          </Modal>
        </div>
      </Container>
    );
  }
}

function mstp(state) {
  return {
    litterGatheredSec: state.litterGatheredSec,
    litterThrownSec: state.litterThrownSec,
    litterTotal: state.litterTotal,
    clickCounter: state.clickCounter,

    numVolunteer: state.numVolunteer,
    numOceanInitiative: state.numOceanInitiative,
    numRecyclingCenter: state.numRecyclingCenter,
    numCitizenActions: state.numCitizenActions,
    numLegislation: state.numLegislation,
    numHighTech: state.numHighTech,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({ updateLitter }, dispatch);
}

export default connect(mstp, mdtp)(Header);
