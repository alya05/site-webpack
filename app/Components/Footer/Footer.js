import React, { Component } from 'react';
import './footer.less';

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMenuActive: false
    }
  }

  changeMenuStatus = () => {
    this.setState({
      isMenuActive: !this.state.isMenuActive
    });
  };

  render() {
    return (
      <footer className="footer">
        <div className="footer__inner-container">
          <div className="footer__copyright">
            <div className="footer__copyright-container">
              <img className="logo__icon" src={this.props.logo} alt="Логотип сервиса Звыш" />
              <p className="footer__copyright-text">© 2017</p>
            </div>
          </div>
          <div className="footer__requisites-container">
            <p className="footer__requisites-text">ИП Черноокий Е.И.</p>
            <p className="footer__requisites-text">УНП 691988448</p>
            <a className="footer__requisites-number" href="tel:+375333891376">+375 (33) 389-13-76</a>
            <p className="footer__requisites-text">feedback@zvysh.by</p>
        </div>
        <div className="footer__agreements-container">
          <a className="footer__agreement" href="#" target="_blank">Публичный договор оферты</a>
          <a className="footer__agreement" href="#" target="_blank">Договор на оказание услуг</a>
        </div>
        <div className="footer__social-container">
          <a className="link" target="_blank" href="https://vk.com/zvysh">
            <i className="fa fa-vk icon" aria-hidden="true"/>
          </a>
          <a className="link" target="_blank" href="https://www.facebook.com/zvysh">
            <i className="fa fa-facebook icon" aria-hidden="true"/>
          </a>
          <a className="link" target="_blank" href="https://ok.ru/group/53359058288782">
            <i className="fa fa-odnoklassniki icon" aria-hidden="true"/>
          </a>
        </div>
      </div>
  </footer>
    );
  }
}

export default Footer;
