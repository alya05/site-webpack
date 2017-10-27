import React, { Component } from 'react';
import './Bottom-Calculator.less'
import { NavLink } from 'react-router-dom'

class BottomCalculator extends Component {
  render() {
    return (
        <section className="bottom-calculator-section">
          <div className="bottom-calculator-section__inner-container">
             <div className="bottom-calculator-section__text">
                 <NavLink to={'order'}>Уборка квартиры от {this.props.price} рублей</NavLink>
             </div>
          </div>
        </section>
    );
  }
}

export default BottomCalculator;
