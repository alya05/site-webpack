import React, { Component } from 'react';
import './Logo.less';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <div className="logo__inner-container">
          <img className="logo__image" src={this.props.logo} alt="Логотип сервиса Звыш"/>
        </div>
      </div>
    );
  }
}

export default Logo;
