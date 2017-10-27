import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Navigation.less';

class Navigation extends Component {
  render() {
    return (
      <div className={this.props.isMenuActive ? "navigation navigation--active" : "navigation"}  >
        <div className="navigation__inner-container">
          <div className="navigation__element">
            <NavLink to={'flat'} className="navigation__element-name navigation__element-name_active">квартира</NavLink>
          </div>
          <div className="navigation__element">
            <NavLink to={'cottage'} className="navigation__element-name">коттедж</NavLink>
          </div>
          {/*<div className="navigation__element">*/}
            {/*<a className="navigation__element-name" href="#">окна</a>*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}

export default Navigation;
