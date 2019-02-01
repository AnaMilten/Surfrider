import React, { Component } from 'react';
import './BestScore.scss';
import {
  Popover, PopoverHeader, PopoverBody,
} from 'reactstrap';
import '../containers/infoPopHover/PopHover.scss';
import { varServer } from '../constants';

class BestScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
      players: [],
    };
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    const { popoverOpen } = this.state;
    this.setState({
      popoverOpen: !popoverOpen,
    });
    fetch(`${varServer}players/asc`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          players: data,
        });
      });
  }


  render() {
    const { popoverOpen, players } = this.state;
    return (
      <div className="BestScore">
        <p id="PopoverFocus" onClick={this.toggle}>
          Classement
        </p>
        <Popover className="popover" trigger="focus" placement="top" isOpen={popoverOpen} target="PopoverFocus" toggle={this.toggle}>
          <PopoverHeader PopoverHeader className="border-pop-title">Les meilleurs scores</PopoverHeader>
          <PopoverBody className="border-pop">
            <ol>
              {players.map(player => (
                <li key={player.id}>
                  {player.pseudo}
                  &nbsp; : &nbsp;
                  {player.game_time}
                </li>
              ))
              }
            </ol>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}


export default BestScore;
