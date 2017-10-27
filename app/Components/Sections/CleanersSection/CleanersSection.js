import React, { Component } from 'react';
import './CleanersSection.less';

class CleanersSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cleaner1: false,
      cleaner2: false,
      cleaner3: false,
    }
  }

  mouseOut = (prop) => {
    this.setState({[prop]: false});
  };

  mouseOver = (prop) =>{
    this.setState({[prop]: true});
  };

  render() {
    return (
      <section className="cleaners-section">
        <div className="cleaners-section__inner-container">
          <h3 className="cleaners-section__title">Наши клинеры</h3>
          <div className="cleaners-section__cleaner-container">
            <div onMouseOver={this.mouseOver.bind(this, 'cleaner1')}
                 onMouseOut={this.mouseOut.bind(this, 'cleaner1')}
                 className="cleaners-section__cleaner cleaners-section__cleaner--safety">
              <div className={this.state.cleaner1? 'cleaners-section__cleaner-description-container--hover cleaners-section__cleaner-description-container' : "cleaners-section__cleaner-description-container"}>
                <div className="cleaners-section__cleaner-description">
                  <span className="cleaners-section__cleaner-name">Ami West</span>
                  <span className="cleaners-section__cleaner-age">17 лет</span>
                </div>
              </div>
              <div className={this.state.cleaner1 ? "cleaners-section__content cleaners-section__content--hover" : 'cleaners-section__content'}>
                <span className="cleaners-section__content-name">Ami West</span>
                <hr className="cleaners-section__line" />
                <span className="cleaners-section__content-text">
                    Наши домработницы ничего не воруют и не ломают.
                    Они прошли тщательный отбор, профессиональное обучение и стажировку. Им можно доверять.
                  </span>
              </div>
            </div>
            <div onMouseOver={this.mouseOver.bind(this, 'cleaner2')}
                 onMouseOut={this.mouseOut.bind(this, 'cleaner2')}
                 className="cleaners-section__cleaner cleaners-section__cleaner--safety">
              <div className={this.state.cleaner2 ? 'cleaners-section__cleaner-description-container--hover cleaners-section__cleaner-description-container' : "cleaners-section__cleaner-description-container"}>
                <div className="cleaners-section__cleaner-description">
                  <span className="cleaners-section__cleaner-name">Ami West</span>
                  <span className="cleaners-section__cleaner-age">17 лет</span>
                </div>
              </div>
              <div className={this.state.cleaner2 ? "cleaners-section__content cleaners-section__content--hover" : 'cleaners-section__content'}>
                <span className="cleaners-section__content-name">Ami West</span>
                <hr className="cleaners-section__line" />
                <span className="cleaners-section__content-text">
                    Наши домработницы ничего не воруют и не ломают.
                    Они прошли тщательный отбор, профессиональное обучение и стажировку. Им можно доверять.
                  </span>
              </div>
            </div>
            <div onMouseOver={this.mouseOver.bind(this, 'cleaner3')}
                 onMouseOut={this.mouseOut.bind(this, 'cleaner3')}
                 className="cleaners-section__cleaner cleaners-section__cleaner--safety">
              <div className={this.state.cleaner3 ? 'cleaners-section__cleaner-description-container--hover cleaners-section__cleaner-description-container' : "cleaners-section__cleaner-description-container"}>
                <div className="cleaners-section__cleaner-description">
                  <span className="cleaners-section__cleaner-name">Ami West</span>
                  <span className="cleaners-section__cleaner-age">17 лет</span>
                </div>
              </div>
              <div className={this.state.cleaner3 ? "cleaners-section__content cleaners-section__content--hover" : 'cleaners-section__content'}>
                <span className="cleaners-section__content-name">Ami West</span>
                <hr className="cleaners-section__line" />
                <span className="cleaners-section__content-text">
                    Наши домработницы ничего не воруют и не ломают.
                    Они прошли тщательный отбор, профессиональное обучение и стажировку. Им можно доверять.
                  </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CleanersSection;
