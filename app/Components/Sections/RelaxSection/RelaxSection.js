import React, { Component } from 'react';
import './RelaxSection.less';


class RelaxSection extends Component {
  render() {
    return (
      <section className="relax-section">
        <div className="relax-section__inner-container">
          <h3 className="relax-section__title">Отдыхайте! Чистоту дома мы возьмём на себя</h3>
          <div className="relax-section__option-container">
            <div className="relax-section__option">
              <div className="relax-section__image">

              </div>
              <span className="relax-section__text">Вы хотите проводить время с семьёй или за любимым делом</span>
            </div>

            <div className="relax-section__option">
              <div className="relax-section__image">

              </div>
              <span className="relax-section__text">Уборка в доме никак не вписывается в Ваши планы</span>
            </div>

            <div className="relax-section__option">
              <div className="relax-section__image">

              </div>
              <span className="relax-section__text">Мы подарим Вам чистоту и свободное время на родных и близких!</span>
            </div>

        </div>
          <div className="relax-section__line">

          </div>
      </div>
      </section>
    );
  }
}

export default RelaxSection;
