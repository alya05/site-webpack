import React, { Component } from 'react';
import './PhoneNumber.less';

class PhoneNumber extends Component {
  render() {
    return (
      <div className="phone-number">
        <div className="phone-number__inner-container">
          <i className="phone-number__icon fa fa-phone" aria-hidden="true"/>
          <a className="phone-number__text" href='tel:+375333891376'>+375 (33) 389-13-76</a>
      </div>
  </div>
    );
  }
}

export default PhoneNumber;
