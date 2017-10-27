import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './DescriptionSection.less';
import 'react-tabs/style/react-tabs.css';

class DescriptionSection extends Component {
  render() {
    return (
      <section className="description-section">
        <div className="description-section__inner-container">
          <h3 className="description-section__title">Что входит в уборку Звыш</h3>
          <Tabs>
            <TabList>
              <Tab>Комната</Tab>
              <Tab>Кухня</Tab>
              <Tab>Ванная</Tab>
              <Tab>Коридор</Tab>
            </TabList>
            <TabPanel>
              <div className="description-section__option">
                <div className="description-section__main-image">
                  
                </div>
                <div className="description-section__item-container">
                  <div className="description-section__item">
                    <div className="description-section__image"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                  <div className="description-section__item">
                    <div className="description-section__image"></div>
                    <div className="description-section__text">Моем плиту и столешницу</div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    );
  }
}

export default DescriptionSection;
