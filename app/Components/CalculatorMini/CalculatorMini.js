import React, { Component } from 'react';
import './CalculatorMini.less';
import { NavLink } from 'react-router-dom'

class CalculatorMini extends Component {
  render() {
    const {roomCount, bathroomCount, addRoom, removeRoom, addBathRoom, removeBathRoom, price} = this.props.mainSectionProps;
    return (
      <div className="calculator-mini">
        <div className="calculator-mini__inner-container">
          <div className="calculator-mini__button-block">
            <div className="calculator-mini__button-block-inner-container">
              <div onClick={removeRoom} className="calculator-mini__button-block-button">–</div>
              <div className="calculator-mini__button-block-text">{roomCount} комната</div>
              <div onClick={addRoom}className="calculator-mini__button-block-button">+</div>
            </div>
          </div>
          <div className="calculator-mini__button-block">
            <div className="calculator-mini__button-block-inner-container">
              <div onClick={removeBathRoom} className="calculator-mini__button-block-button">–</div>
              <div className="calculator-mini__button-block-text">{bathroomCount} санузел</div>
              <div onClick={addBathRoom} className="calculator-mini__button-block-button">+</div>
            </div>
          </div>
          <div className="calculator-mini__button-block calculator-mini__button-block_makeorder-style">
            <div className="calculator-mini__button-block-inner-container">
              <NavLink to={'order'}className="calculator-mini__button-block-text calculator-mini__button-block-text_makeorder-style">
              <div>Заказать уборку от {price}р</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorMini;
