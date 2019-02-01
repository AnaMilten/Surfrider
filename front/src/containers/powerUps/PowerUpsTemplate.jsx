import React from 'react';
import { Col } from 'reactstrap';
import check from '../../asset/checked.png';

const PowerUpsTemplate = ({
  powerClickAction, points, image, cost, litterVariable, numVariable,
  customValue1, customValue2, title,
}) => {
  let csspowerClick = '';
  switch (true) {
    case (points < cost && litterVariable !== customValue1
      && litterVariable !== customValue2 && numVariable >= 1):
      csspowerClick = 'blocked';
      break;
    case (points >= cost && litterVariable !== customValue1
      && litterVariable !== customValue2 && numVariable >= 1):
      csspowerClick = 'enabled';
      break;
    case (litterVariable === customValue1 || litterVariable === customValue2):
      csspowerClick = 'checked';
      break;
    default:
      csspowerClick = 'blocked';
  }

  let checked = ''; switch (true) {
    case (points < cost && litterVariable !== customValue1
      && litterVariable !== customValue2 && numVariable >= 1):
      checked = image;
      break;
    case (points >= cost && litterVariable !== customValue1
      && litterVariable !== customValue2 && numVariable >= 1):
      checked = image;
      break;
    case (litterVariable === customValue1 || litterVariable === customValue2):
      checked = check;
      break;
    default:
      checked = image;
  }


  return (
    <Col lg="3" md="3" sm="3" xs="12" className={csspowerClick}>
      <p className="modal-text">
        <strong>
          {title}
        </strong>
        <br />
        <img src={checked} responsive alt="powerup" color="info" onClick={() => powerClickAction()} size="sm" className="actions-icons" />
        <br />
        {cost}
        &nbsp;pts
      </p>

    </Col>
  );
};

export default PowerUpsTemplate;
