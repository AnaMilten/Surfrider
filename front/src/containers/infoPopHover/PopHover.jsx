import React, { Component } from 'react';
import {
  Button, Popover, PopoverBody, PopoverHeader, Col,
} from 'reactstrap';
import './PopHover.scss';

class PopHover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountMenuOpen: false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  open() {
    this.setState({
      accountMenuOpen: true,
    });
  }

  close() {
    this.setState({
      accountMenuOpen: false,
    });
  }

  toggle() {
    this.setState({
      accountMenuOpen: !this.accountMenuOpen,
    });
  }

  render() {
    const { accountMenuOpen } = this.state;
    const {
      title, text, power1, power2, id,
    } = this.props;
    return (
      <Col lg="2" md="3" sm="3" xs="12">
        <Button id={id} size="sm" color="info" onMouseEnter={this.open} onMouseLeave={this.close}>Info</Button>
        <Popover className="popover" placement="bottom" isOpen={accountMenuOpen} target={id} toggle={this.toggle}>
          <PopoverHeader className="border-pop-title">{title}</PopoverHeader>
          <PopoverBody className="border-pop">
            {text}
            <br />
            <br />
            {power1}
            <br />
            {power2}
          </PopoverBody>
        </Popover>
      </Col>
    );
  }
}

export default PopHover;
