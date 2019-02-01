import React, { Component } from 'react';
import moment from 'moment';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: moment.unix(0).utc(),
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds.add(1, 's'),
      }));
    }, 1000);
  }

  render() {
    const { seconds } = this.state;

    return (
      <div>
        <p>
          Temps total de jeu :&nbsp;
          {seconds.format('HH:mm:ss')}
        </p>
      </div>
    );
  }
}

export default Timer;
