import React, { Component } from 'react';
import './FAQSection.less';
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion'

const blockElements = {
  animator: "accordion-animator",
  content: "accordion-content",
  label: "accordion-title",
  panel: "accordion-panel"
};

const bemModifiers = {
  animated: "rttttttttttttttttttttttttttt",
  between: "between",
  checked: "checked",
  content: "content",
  disabled: "disabled",
  enabled: "enabled",
  first: "first",
  hidden: "hidden",
  last: "last",
  noContent: "no-content",
  unchecked: "unchecked"
};


class FAQSection extends Component {
  render() {
    return (
      <section className="faq-section">
        <div className="faq-section__inner-container">
          <h3 className="faq-section__title">Вопросы и ответы</h3>
          <Tabbordion blockElements={blockElements}
                      className="accordion"
                      animateContent="height"
                      name="tabs"
                      bemModifiers={bemModifiers}
                      mode="multiple"
                      component="ul">
            <TabPanel>
              <TabLabel>Какие средства вы используете для уборки?</TabLabel>
              <TabContent>
                <p>Гвозди</p>
                <p>Молоток</p>
              </TabContent>
            </TabPanel>
            <TabPanel>
              <TabLabel>Another title</TabLabel>
              <TabContent>
                <h2>Another Sample</h2>
                <p>Some other kind of content</p>
              </TabContent>
            </TabPanel>
          </Tabbordion>
        </div>
      </section>
    );
  }
}

export default FAQSection;
