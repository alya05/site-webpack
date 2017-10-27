import React, { Component } from 'react';
import './TrustSection.less';

class TrustSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoverSafety: false,
      isHoverQuality: false,
      isHoverEco: false,
    }
  }

  render() {
    return (
      <section className="trust-section">
        <div className="trust-section__inner-container">
          <h3 className="trust-section__title">На Звыш можно положиться</h3>
          <div className="trust-section__argument-container">
              <div className="trust-section__argument trust-section__argument--safety">
                <span className="trust-section__argument-title">БЕЗОПАСНОСТЬ</span>
                <div className="trust-section__content">
                  <span className="trust-section__content-title">БЕЗОПАСНОСТЬ</span>
                  <hr className="trust-section__line" />
                  <span className="trust-section__content-text">
                    Наши домработницы ничего не воруют и не ломают.
                    Они прошли тщательный отбор, профессиональное обучение и стажировку. Им можно доверять.
                  </span>
                </div>
              </div>
              <div className="trust-section__argument trust-section__argument--quality">
                <span className="trust-section__argument-title">КАЧЕСТВО</span>
                <div className="trust-section__content">
                  <span className="trust-section__content-title">КАЧЕСТВО</span>
                  <hr className="trust-section__line" />
                  <span className="trust-section__content-text">
                    Мы работаем с итальянским инвентарём по отельной технологии.
                    Это делает нашу уборку первоклассной. Но если что-то пошло не так, мы переделаем бесплатно.
                  </span>
                </div>
              </div>
              <div className="trust-section__argument trust-section__argument--eco">
                <span className="trust-section__argument-title">ЭКОЛОГИЧНОСТЬ</span>
                <div className="trust-section__content">
                  <span className="trust-section__content-title">ЭКОЛОГИЧНОСТЬ</span>
                  <hr className="trust-section__line" />
                  <span className="trust-section__content-text">
                    В арсенале домработниц Звыш только профессиональная косметика для дома.
                    Она гиппоаллергенна и безопасна для Вашей семьи и питомцев.
                  </span>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrustSection;
