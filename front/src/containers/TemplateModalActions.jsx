import React, { Component } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Col,
} from 'reactstrap';

class TemplateModalActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  trigger() {
    const {
      addVariable, costVariable, numVariable, litterVariable,
    } = this.props;
    addVariable(costVariable, litterVariable);
    if (numVariable === 0) {
      this.toggle();
    }
  }

  render() {
    const {
      costVariable, title, text, link, textLink, image, points, numVariable,
      numVariable2,
    } = this.props;
    const { modal } = this.state;

    let cssVolunteer = '';
    switch (true) {
      case (numVariable === 0 && costVariable > points && numVariable2 >= 1):
        cssVolunteer = 'blocked';
        break;
      case (costVariable <= points && numVariable2 >= 1):
        cssVolunteer = 'enabled';
        break;
      case (numVariable >= 1 && costVariable > points && numVariable2 >= 1):
        cssVolunteer = 'disabled';
        break;
      default:
        cssVolunteer = 'blocked';
    }

    return (
      <Col lg="4" md="3" sm="3" xs="12">
        <p className="modal-text">
          <strong>
            {title}
          </strong>
          <br />
          <img src={image} responsive className={`actions-icons ${cssVolunteer}`} onClick={() => this.trigger()} alt="Volunteer" />
          <br />
          {costVariable}
          &nbsp;
          pts
        </p>
        <Modal isOpen={modal} toggle={this.toggle} className="piper">
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            <p>{text}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">{textLink}</a>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>Fermer la fenêtre</Button>
          </ModalFooter>
        </Modal>
      </Col>
    );
  }
}

export default TemplateModalActions;
