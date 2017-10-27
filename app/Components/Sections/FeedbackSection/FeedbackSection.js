import React, { Component } from 'react';
import './feedbackSection.less';
import cleaner from 'app/images/cleaner.jpg'

class FeedbackSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
          <section className="feedback-section">
            <div className="feedback-section__inner-container">
                <h3 className="feedback-section__title">Отзывы наших первых пользователей</h3>
                <div className="feedback-section__feedback-container">
                    <div className="feedback-section__feedback">
                        <div className="feedback-section__image-container">
                            <img className="feedback-section__image" src={cleaner} alt="cleanerka"/>
                        </div>
                        <div className="feedback-section__description">
                            <p className="feedback-section__name">Lorem Ipsum</p>
                            <p className="feedback-section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Est fugiat esse voluptates nemo ex, officia nesciunt delectus odit reprehenderit temporibus.</p>
                        </div>
                    </div>
                    <div className="feedback-section__feedback">
                        <div className="feedback-section__image-container">
                            <img className="feedback-section__image" src={cleaner} alt="cleanerka"/>
                        </div>
                        <div className="feedback-section__description">
                            <p className="feedback-section__name">Lorem Ipsum</p>
                            <p className="feedback-section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Est fugiat esse voluptates nemo ex, officia nesciunt delectus odit reprehenderit temporibus.</p>
                        </div>
                    </div>
                    <div className="feedback-section__feedback">
                        <div className="feedback-section__image-container">
                            <img className="feedback-section__image" src={cleaner} alt="cleanerka"/>
                        </div>
                        <div className="feedback-section__description">
                            <p className="feedback-section__name">Lorem Ipsum</p>
                            <p className="feedback-section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Est fugiat esse voluptates nemo ex, officia nesciunt delectus odit reprehenderit temporibus.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>
     );
    }
}

export default FeedbackSection;
