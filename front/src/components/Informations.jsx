import React, { Component } from 'react';
import {
  Popover, PopoverHeader, PopoverBody,
} from 'reactstrap';
import '../containers/infoPopHover/PopHover.scss';
import contentModals from '../reducers/contentModals';

class Informations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { popoverOpen } = this.state;
    this.setState({
      popoverOpen: !popoverOpen,
    });
  }

  render() {
    const { popoverOpen } = this.state;
    const {
      modalVolunteer, modalOceanIntiatiative, modalRecyclingCenter, modalCitizenAction,
      modalHighTech, modalLegislation,
    } = contentModals;
    return (
      <div>
        <p id="Popover1" onClick={this.toggle}>
          Agissez
        </p>
        <Popover className="popover" trigger="focus" placement="top" isOpen={popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader PopoverHeader className="border-pop-title">En savoir plus</PopoverHeader>
          <PopoverBody className="border-pop">
            <p>Vous pouvez retrouver toutes les informations ici :</p>
            <ul>
              <li>
                <a href={modalVolunteer.link} target="_blank" rel="noopener noreferrer">Devenir Bénévole !</a>
              </li>
              <li>
                <a href={modalOceanIntiatiative.link} target="_blank" rel="noopener noreferrer">Nos initiatives océanes</a>
              </li>
              <li>
                <a href={modalRecyclingCenter.link} target="_blank" rel="noopener noreferrer">Trouvez des centres de recyclages près de chez vous</a>
              </li>
              <li>
                <a href={modalCitizenAction.link} target="_blank" rel="noopener noreferrer">Pour s&#39;engager avec Surfrider Coastal Defenders</a>
              </li>
              <li>
                <a href={modalHighTech.link} target="_blank" rel="noopener noreferrer">Faites entendre votre voix</a>
              </li>
              <li>
                <a href={modalLegislation.link} target="_blank" rel="noopener noreferrer">En savoir plus sur les actions de lobbying de Surfrider</a>
              </li>
            </ul>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default Informations;
