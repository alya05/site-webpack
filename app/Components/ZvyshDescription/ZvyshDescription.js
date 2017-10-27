import React, { Component } from 'react';
import './ZvyshDescription.less';

class ZvyshDescription extends Component {
  render() {
    return (
      <div className="zvysh-description">
        <div className="zvysh-description__inner-container">
          <h2 className="zvysh-description__text">Сервис по уборке</h2>
          <div className="zvysh-description__location">
            <i className="zvysh-description__location-icon fa fa-map-marker" aria-hidden="true"/>
            <h2 className="zvysh-description__text zvysh-description__text_bottom">Солигорск</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ZvyshDescription;
