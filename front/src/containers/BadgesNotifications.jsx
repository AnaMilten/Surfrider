import React, { Component } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { connect } from 'react-redux';

class BadgesNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      bronze: false,
      silver: false,
      gold: false,
      title: '',
      text: '',
      image: '',
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidUpdate() {
    const {
      bronze, silver, gold,
    } = this.state;
    const { litterThrownSec } = this.props;

    if (litterThrownSec <= 175000 && !bronze) {
      this.bronzeBadge();
    }
    if (litterThrownSec <= 75000 && !silver) {
      this.silverBadge();
    }
    if (litterThrownSec === 0 && !gold) {
      this.goldBadge();
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  bronzeBadge() {
    this.setState(prevState => ({
      bronze: !prevState.bronze,
      modal: !prevState.modal,
      title: 'Bronze Badge',
      text: 'Super tu as réduit à 175.000 le nombre de déchets rejetés! Arrive à 75.000 pour obtenir la médaille d\'argent !',
      image: 'https://cdn0.iconfinder.com/data/icons/sport-balls/128/bronze_medal.png',
    }));
  }

  silverBadge() {
    this.setState(prevState => ({
      silver: !prevState.silver,
      modal: !prevState.modal,
      title: 'Silver Badge',
      text: 'Super tu as réduit à 75.000 le nombre de déchets rejetés! Arrive à 0 pour obtenir la médaille d\'or !',
      image: 'https://cdn0.iconfinder.com/data/icons/sport-balls/128/silver_medal.png',
    }));
  }

  goldBadge() {
    this.setState(prevState => ({
      gold: !prevState.gold,
      modal: !prevState.modal,
      title: 'Gold Badge',
      text: 'Super tu as réduit à 0 le nombre de déchets rejetés! Ramasse les déchets dans l\'océan pour finir le jeu !',
      image: 'https://cdn0.iconfinder.com/data/icons/sport-balls/128/gold_medal.png',
    }));
  }

  render() {
    const {
      modal, text, title, image,
    } = this.state;
    return (
      <div>
        <Modal isOpen={modal} toggle={this.toggle} className="piper">
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            {text}
            <br />
            <img src={image} alt="" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Fermer</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mstp(state) {
  return {
    litterThrownSec: state.litterThrownSec,
  };
}

export default connect(mstp)(BadgesNotifications);
