import React, { Component } from 'react';
import {
  Popover, PopoverHeader, PopoverBody, Button,
} from 'reactstrap';

class MyLocalStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
  }

  // Function to clear localStorage and reload page
  clearLocalStorage() {
    this.stateRemove = localStorage.removeItem('state');
    this.pseudoRemove = localStorage.removeItem('pseudo');
    this.secondsRemove = localStorage.removeItem('seconds');
    window.location.reload();
  }

  toggle() {
    const { popoverOpen } = this.state;
    this.setState({
      popoverOpen: !popoverOpen,
    });
  }


  toggleClose() {
    this.setState({
      popoverOpen: false,
    });
  }


  render() {
    const { popoverOpen } = this.state;
    return (
      <div>
        <p id="PopoverFocusClassement" onClick={this.toggle}>
          Recommencer
        </p>
        <Popover className="popover" trigger="focus" placement="top" isOpen={popoverOpen} target="PopoverFocusClassement" toggle={this.toggle}>
          <PopoverHeader className="border-pop-title">Recommencer</PopoverHeader>
          <PopoverBody className="border-pop">
            <p>Êtes vous sûr de vouloir recommencer le jeux ?</p>
            <Button size="lg" color="success" className="ml-5" onClick={() => this.clearLocalStorage()}> Oui </Button>
            <Button size="lg" color="danger" className="ml-4" onClick={this.toggleClose}> Non </Button>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default MyLocalStorage;
