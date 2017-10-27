import React, { Component } from 'react';
import './ProcessingSection.less';

const parameters = [
  {
    photo: {},
    title: 'Платите за результат',
    text: 'Оплатите уборку наличными и наслаждайтесь чистотой в вашем доме'
  },
  {
    photo: {},
    title: 'Платите ',
    text: 'Злате на лечение периминости'
  },
  {
    photo: {},
    title: 'Платите за чиво',
    text: 'И всё будет от и до!'
  }
];

class ProcessingSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parameterIndex: 1
    }
  }
  renderParameter = () => {
   return (
     <div className="processing-section__parameter">
       <div className="processing-section__image">

       </div>
      </div>
   )
  };

  renderDescription = () => {
    return (
      <div className="processing-section__description">
        <span className="processing-section__text-title">{parameters[this.state.parameterIndex].title}</span>
        <span className="processing-section__text">{parameters[this.state.parameterIndex].text}</span>
      </div>
    );
  };

  moveUp =() => {
    if (this.state.parameterIndex === parameters.length-1) {
     return;
    } else {
      this.setState({
        parameterIndex: ++this.state.parameterIndex
      })
    }
  };

  moveDown =() => {
    if (this.state.parameterIndex === 0) {
     return;
    } else {
      this.setState({
        parameterIndex: --this.state.parameterIndex
      })
    }
  };
  render() {
    return (
      <section className="processing-section">
        <div className="processing-section__inner-container">
          <h3 className="processing-section__title">Как мы работаем</h3>
          <div className="processing-section__parameter-container">
            <i onClick={this.moveDown}
               className="processing-section__navigation-icon  fa fa-angle-left"/>
            {this.renderParameter()}
            <i onClick={this.moveUp}
               className="processing-section__navigation-icon  fa fa-angle-right"/>
				  </div>
          {this.renderDescription()}
          <div className="processing-section__navigation">
            {
              parameters.map((item, index) => (
                <div className={this.state.parameterIndex === index ? "processing-section__circle processing-section__circle--active" : "processing-section__circle"}>
                  <i className={"fa fa-circle inner-circle"} aria-hidden="true"/>
                </div>
              ))
            }
          </div>
        </div>
		  </section>
    );
  }
}

export default ProcessingSection;
