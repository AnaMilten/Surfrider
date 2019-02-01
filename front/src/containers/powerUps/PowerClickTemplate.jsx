import React from 'react';
import { Col } from 'reactstrap';
import check from '../../asset/checked.png';

const PowerClickTemplate = ({
  powerClickAction, points, pointsPerClick, image, cost, customPointClick1,
  customPointClick2, title,
}) => {
  let csspowerClick = '';
  switch (true) {
    case (points < cost && pointsPerClick !== customPointClick1
      && pointsPerClick !== customPointClick2):
      csspowerClick = 'blocked';
      break;
    case (points >= cost && pointsPerClick !== customPointClick1
      && pointsPerClick !== customPointClick2):
      csspowerClick = 'enabled';
      break;
    case (pointsPerClick === customPointClick1 || pointsPerClick === customPointClick2):
      csspowerClick = 'checked';
      break;
    default:
      csspowerClick = 'blocked';
  }
  let checked = '';
  switch (true) {
    case (points < cost && pointsPerClick !== customPointClick1
      && pointsPerClick !== customPointClick2):
      checked = image;
      break;
    case (points >= cost && pointsPerClick !== customPointClick1
      && pointsPerClick !== customPointClick2):
      checked = image;
      break;
    case (pointsPerClick === customPointClick1 || pointsPerClick === customPointClick2):
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

export default PowerClickTemplate;
