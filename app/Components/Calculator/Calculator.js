import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Header from 'app/Components/Header/Header';
import Footer from 'app/Components/Footer/Footer'
import logo from 'app/images/main-logo-calculator.png';
import {CircleLoader} from 'react-spinners';
import './Calculator.less';

import moment from 'moment';
import 'moment/locale/ru'
import * as PRICES from 'app/constants/price';
import * as TIMES from 'app/constants/time';

import fridge from 'app/images/fridge.png';
import fridgeActive from 'app/images/fridgeActive.png';

import oven from 'app/images/oven.png';
import ovenActive from 'app/images/ovenActive.png';

import window from 'app/images/window.png';
import windowActive from 'app/images/windowActive.png';

import balcony from 'app/images/balcony.png';
import balconyActive from 'app/images/balconyActive.png';

import cutlery from 'app/images/cutlery.png';
import cutleryActive from 'app/images/cutleryActive.png';

import microwave from 'app/images/microwave.png';
import microwaveActive from 'app/images/microwaveActive.png';

import kitchen from 'app/images/kitchen.png'
import kitchenActive from 'app/images/kitchenActive.png'

import iron from 'app/images/iron.png'
import ironActive from 'app/images/ironActive.png'

import chandelier from 'app/images/chandelier.png'
import chandelierActive from 'app/images/chandelierActive.png'

import tray from 'app/images/tray.png'
import trayActive from 'app/images/trayActive.png'

import drawer from 'app/images/drawer.png'
import drawerActive from 'app/images/drawerActive.png'

import bathtub from 'app/images/bathtub.png'
import bathtubActive from 'app/images/bathtubActive.png'
import ReactDOM from 'react-dom';

class Calculator extends Component {
  constructor(props) {
    super(props);
    moment.locale('ru');
    this.state = {
      roomCount: this.props.defaultValues.roomCount || 1,
      bathroomCount:  this.props.defaultValues.bathroomCount || 1,
      userInfo: {},
      address: {},
      comment: '',
      date: null,
      time: '',
      isHoover: false,
      isSupportive: true,
      isComplex: false,
      isScrollBlock: false,
      times: [
        {value: '6.30', label: '6.30'},
        {value: '7.30', label: '7.30'},
        {value: '8.30', label: '8.30'},
      ],
      options: {
        window: {
          checked: false,
          count: 0,
          description: 'Окна'
        },
        balcony: {
          checked: false,
          count: 0,
          description: 'Балкон'
        },
        cutlery: {
          checked: false,
          count: 0,
          description: 'Посуда'
        },
        fridge: {
          checked: false,
          count: 0,
          description: 'Холодильник'
        },
        oven: {
          checked: false,
          count: 0,
          description: 'Духовка'
        },
        microwave: {
          checked: false,
          count: 0,
          description: 'Микроволновка'
        },
        kitchen: {
          checked: false,
          count: 0,
          description: 'Внутри кухонных шкафов'
        },
        iron: {
          checked: false,
          count: 0,
          description: 'Глажка'
        },
        chandelier: {
          checked: false,
          count: 0,
          description: 'Люстры'
        },
        tray: {
          checked: false,
          count: 0,
          description: 'Лоток питомца'
        },
        drawer: {
          checked: false,
          count: 0,
          description: 'Фасады мебели'
        },
        bathtub : {
          checked: false,
          count: 0,
          description: 'Стенны в ванной'
        },
        c: false
      }
    }
  }

  componentDidMount() {
  }
  componentWillMount() {
    this.setVisible();
  }

  handleScroll(e) {
    debugger;
    console.log(e);
  }

  renderRoomCount = () => {
    if (this.state.roomCount === 1) {
      return this.state.roomCount + ' комната'
    }

    if (this.state.roomCount === 5) {
      return this.state.roomCount + ' комнат'
    }

      if (this.state.roomCount > 1) {
        return this.state.roomCount + ' комнаты'
      }
    };

  renderTimeDate = () => {
    if (this.state.date === null) {
      return '';
    } else
    {
      return this.state.date.format('DD:MM:YYYY') + '/' + this.state.time;
    }
  };

    renderBathroomCount =() => {
      if (this.state.bathroomCount > 1) {
        return this.state.bathroomCount + ' санузла'
      } else {
        return this.state.bathroomCount + ' санузел'
      }
    };

    renderOrderHeader = () => {
      let rooms = '';
      let baths = '';
      let roomCount = this.state.roomCount;
      let bathroomCount = this.state.bathroomCount;
      let isSupportive = this.state.isSupportive
      if (roomCount > 1) {
        rooms = ' жилыми комнатами'
      } else {
        rooms = '-ой жилой комнатой'
      }

      if (bathroomCount > 1) {
        baths = ' ванными комнатами'
      } else {
        baths = '-ой ванной комнатой'
      }

      return (
        'Уборка кваритры с ' + roomCount + rooms + ' и ' + bathroomCount + baths
      );
    };

    changeData = (date) => {
      this.setState({
        date: date
      });
    };

    addRoom = () => {
      if (this.state.roomCount === 5) {
        return;
      }
      this.setState({
        roomCount: ++this.state.roomCount
      })
    };

    removeRoom = () => {
      if (this.state.roomCount === 1) {
        return;
      } else {
        this.setState({
          roomCount: --this.state.roomCount
        })
      }
    };

  addBathRoom = () => {
    if (this.state.bathroomCount === 2) {
      return;
    }
    this.setState({
      bathroomCount: ++this.state.bathroomCount
    })
  };

  removeBathRoom = () => {
    if (this.state.bathroomCount === 1) {
      return;
    } else {
      this.setState({
        bathroomCount: --this.state.bathroomCount
      })
    }
  };

  editHoover = (e) => {
    this.setState({
      isHoover: !this.state.isHoover
    });
  };

  changeUserInfo = (event) => {
    this.setState({
      userInfo: {...this.state.userInfo,
        [event.target.name]: event.target.value
      }
    });
  };

  changeAddress = (event) => {
    this.setState({
      address: {...this.state.address,
        [event.target.name]: event.target.value
      }
    });
  };

  timeChange = (selectTIme) => {
    this.setState({
      time: selectTIme.value
    });
  };

  changeComment = (event) => {
    this.setState({
      comment: event.target.value
    });
  };

  renderDescription = () => {
   let list;
    moment.lang('ru');
    if (this.state.isSupportive) {
      list = (
        <ul className="calculator__list">
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
        </ul>
      );
    } else {
       list = (
        <ul className="calculator__list">
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
          <li><span  className="calculator__list-element">уборка пыли с ковров и мягкой мебели</span></li>
        </ul>
      );
    }
    return list;
  };

  renderOptionsList = () => {
    let state = this.state.options;
    let descriptions = [];
    for(let key in state) {
      if (state[key].checked) {
        descriptions.push(state[key].description);
      }
    }
    return (
      <ul className="calculator__order-info-list">
        {
          descriptions.map((item, index) =>
            <li className="calculator__order-info-listItem" key={index}>{item}</li>
          )
        }
      </ul>
    )
  };

  setSupportive = () => {
    this.setState({
      options: {...this.state.options,
        bathtub: {
          count: 0,
          checked: false,
          description: this.state.options.bathtub.description,
        },
        drawer: {
          count: 0,
          checked: false,
          description: this.state.options.drawer.description,
        },
      },
      isSupportive: true,
      isComplex: false
    });
  };

  setComplex = () => {
    this.setState({
      options: {...this.state.options,
        bathtub: {
          count: 1,
          checked: true,
          description: this.state.options.bathtub.description,
        },
        drawer: {
          count: 1,
          checked: true,
          description: this.state.options.drawer.description,
        },
      },
      isSupportive: false,
      isComplex: true
    });
    return false;
  };

  addItem = (item) => {
    let currentCount = this.state.options[item].count;
    if (item === 'iron') {
      currentCount += 0.5;
    } else {
      currentCount++;
    }
    this.setState({
    options: {...this.state.options,
      [item]: {
        count: currentCount,
        checked: this.state.options[item].checked,
        description: this.state.options[item].description
      }
    }
    });
  };

  removeItem = (item) => {
    let currentCount = this.state.options[item].count;
    if (currentCount !== 0) {
      if (item === 'iron') {
        currentCount -= 0.5;
      } else {
        currentCount--;
      }
    }
    this.setState({
      options: {...this.state.options,
        [item]: {
          count: currentCount,
          checked: this.state.options[item].checked
        }
      }
    });
  };

  addOption = (option) => {
    let currentCount = this.state.options[option].count;
    if (this.state.options[option].checked) {
      currentCount = 0;
    } else if (currentCount === 0 ) {
      if (option === 'iron') {
        currentCount = 0.5;
      } else {
        currentCount = 1;

      }
    }

    this.setState({
      options:{...this.state.options,
        [option]: {
          count: currentCount,
          checked: !this.state.options[option].checked,
          description: this.state.options[option].description
        }
      }
    });

    if (option === 'drawer' || option === 'bathtub') {
      this.checkComplex(option);
    }
  };

  checkComplex = (option) => {
    const drawerIsCheck = this.state.options.drawer.checked;
    const bathtubIsCheck = this.state.options.bathtub.checked;

    switch (option) {
      case 'drawer': if (drawerIsCheck) {
        this.setState({
          isComplex: false,
          isSupportive: true
        })
      } else {
        if (bathtubIsCheck) {
          this.setState({
            isComplex: true,
            isSupportive: false
          })
        }
      }
      case 'bathtub': if (bathtubIsCheck) {
        this.setState({
          isComplex: false,
          isSupportive: true
        })
      } else {
        if (drawerIsCheck) {
          this.setState({
            isComplex: true,
            isSupportive: false
          })
        }
      }
      default: return

    }
  };

  countPrice = () => {
    const {roomCount, bathroomCount} = this.state;
    const {window, balcony, cutlery, fridge, oven, microwave, kitchen, iron, chandelier, tray, drawer, bathtub} = this.state.options
    let price = 0;
    price += PRICES.BASE_PRICE
     + (roomCount-1)*PRICES.ROOM_PRICE
     + (bathroomCount-1)*PRICES.BATHROOM_PRICE
     + window.count*PRICES.WINDOW_PRICE
     + balcony.count*PRICES.BALCONY_PRICE
     + cutlery.count*PRICES.DISHES_PRICE
     + fridge.count*PRICES.FRIDGE_PRICE
     + oven.count*PRICES.OVEN_PRICE
     + microwave.count*PRICES.MICROWAVE_PRICE
     + kitchen.count*PRICES.KITCHEN_PRICE
     + iron.count*PRICES.IRONING_PRICE
     + chandelier.count*PRICES.CHANDELIER_PRICE
     + tray.count*PRICES.TRAY_PRICE
     + drawer.count*roomCount*PRICES.DRAWER_PRICE
     + bathtub.count*bathroomCount*PRICES.BATHROOM_WALL_PRICE;
    if (this.state.isHoover) price-=2;
    return price + ' руб'
  };

  countTime = () => {
    const {roomCount, bathroomCount} = this.state;
    const {window, balcony, cutlery, fridge, oven, microwave, kitchen, iron, chandelier, tray, drawer, bathtub} = this.state.options
    let time = 0;
    time += TIMES.BASE_TIME
      + (roomCount-1)*TIMES.ROOM_TIME
      + (bathroomCount-1)*TIMES.BATHROOM_TIME
      + window.count*TIMES.WINDOW_TIME
      + balcony.count*TIMES.BALCONY_TIME
      + cutlery.count*TIMES.DISHES_TIME
      + fridge.count*TIMES.FRIDGE_TIME
      + oven.count*TIMES.OVEN_TIME
      + microwave.count*TIMES.MICROWAVE_TIME
      + kitchen.count*TIMES.KITCHEN_TIME
      + iron.count*TIMES.IRONING_TIME
      + chandelier.count*TIMES.CHANDELIER_TIME
      + tray.count*TIMES.TRAY_TIME
      + drawer.count*roomCount*TIMES.DRAWER_TIME
      + bathtub.count*bathroomCount*TIMES.BATHROOM_WALL_TIME;
    return time + ' ч.'
  };

  setVisible = () => {
    setTimeout(() => {
      this.setState({visible: true});
    }, 1000);
  };

  render() {

    var options = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    return (
      <div >
        <div className={this.state.visible ? 'hide': 'spinner'}>
          <CircleLoader loading={!this.state.visible} color={'#2ebaa7'}/>
        </div>
        <div className={this.state.visible ? 'container--visible': 'container'}>
          <div className="calculator__top-header">
            <Header logo={logo} specClass={'header__calculator'}/>
            <div className="calculator__top-title">
              Оформление заказа
            </div>
          </div>
          {/*<div className="scroll-block" ref="scroll" >*/}
          {/*<div className="scroll-block__text-container">*/}
          {/*<span className="scroll-block__text" >К оплате</span>*/}
          {/*<span className="scroll-block__text scroll-block__text--blue">{this.countPrice()}</span>*/}
          {/*</div>*/}
          {/*<div className="scroll-block__button">*/}
          {/*Заказать уборку*/}
          {/*</div>*/}
          {/*</div>*/}
          <div className="calculator">
            <div className="calculator__order-form">
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Параметры квартиры</span>
                </div>
                <div className="calculator__parameters-line">
                  <div className="calculator__parameter">
                    <div onClick={this.removeRoom} className="calculator__parameter-text">-</div>
                    <div className="calculator__parameter-text--center">{this.renderRoomCount()}</div>
                    <div onClick={this.addRoom} className="calculator__parameter-text">+</div>
                  </div>
                  <div className="calculator__parameter">
                    <div onClick={this.removeBathRoom} className="calculator__parameter-text">-</div>
                    <div className="calculator__parameter-text--center">{this.renderBathroomCount()}</div>
                    <div onClick={this.addBathRoom} className="calculator__parameter-text">+</div>
                  </div>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Дата и время</span>
                </div>
                <div className="calculator__parameters-line">
                  <div className="calculator__datePicker-container calculator__parameter ">
                    <DatePicker selected={this.state.date}
                                locale="ru-ru"
                                min-Date={moment().locale('ru')}
                                placeholderText="Выберите дату"
                                readOnly={true}
                                onChange={this.changeData}
                                className={'calculator__input--date'}/>
                  </div>
                  <Select name="Время уборки"
                          value={this.state.time}
                          placeholder="Время уборки"
                          options={this.state.times}
                          clearable={false}
                          searchable={false}
                          className="calculator__parameter"
                          autosize={false}
                          onChange={this.timeChange}/>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Основная уборка</span>
                </div>
                <div className="calculator__button-container">
                  <div onClick={this.setSupportive} className={this.state.isSupportive ? 'calculator__button calculator__button--active' : 'calculator__button'}>поддерживающая</div>
                  <div onClick={this.setComplex} className={this.state.isComplex ? 'calculator__button calculator__button--active' : 'calculator__button'}>комплексная</div>
                </div>
                <div className="calculator__description">
                  {this.renderDescription()}
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Дополнительные опции</span>
                </div>
                <div className="calculator__option-container">
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'window')}
                         className={this.state.options.window.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.window.checked ? windowActive : window} alt="Окна"/>
                      </div>
                      <span className={this.state.options.window.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Окна</span>
                    </div>
                    <div className={this.state.options.window.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'window')} className="calculator__counter-left"><span>-</span></div>
                      <div className="calculator__counter-middle">{this.state.options.window.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'window')}  className="calculator__counter-right"><span>+</span></div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'balcony')}
                         className={this.state.options.balcony.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.balcony.checked ? balconyActive : balcony} alt="Балконы"/>
                      </div>
                      <span className={this.state.options.balcony.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Балкон</span>
                    </div>
                    <div className={this.state.options.balcony.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'balcony')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.balcony.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'balcony')}  className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'cutlery')}
                         className={this.state.options.cutlery.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.cutlery.checked ? cutleryActive : cutlery} alt="Посуда"/>
                      </div>
                      <span className={this.state.options.cutlery.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Посуда</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'fridge')}
                         className={this.state.options.fridge.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.fridge.checked ? fridgeActive : fridge} alt="Холодильник"/>
                      </div>
                      <span className={this.state.options.fridge.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Холодильник</span>
                    </div>
                    <div className={this.state.options.fridge.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'fridge')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.fridge.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'fridge')} className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'oven')}
                         className={this.state.options.oven.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.oven.checked ? ovenActive : oven} alt="Духовка"/>
                      </div>
                      <span className={this.state.options.oven.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Духовка</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'microwave')}
                         className={this.state.options.microwave.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.microwave.checked ? microwaveActive : microwave} alt="Микроволновка"/>
                      </div>
                      <span className={this.state.options.microwave.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Микроволновка</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'kitchen')}
                         className={this.state.options.kitchen.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.kitchen.checked ? kitchenActive : kitchen} alt="Внутри кухонных шкафов"/>
                      </div>
                      <span className={this.state.options.kitchen.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Внутри кухонных шкафов</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'iron')}
                         className={this.state.options.iron.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.iron.checked ? ironActive : iron} alt="Глажка"/>
                      </div>
                      <span className={this.state.options.iron.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Глажка</span>
                    </div>
                    <div className={this.state.options.iron.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'iron')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.iron.count} ч.</div>
                      <div onClick={this.addItem.bind(this, 'iron')} className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'chandelier')}
                         className={this.state.options.chandelier.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.chandelier.checked ? chandelierActive : chandelier} alt="Люстры"/>
                      </div>
                      <span className={this.state.options.chandelier.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Люстры</span>
                    </div>
                    <div className={this.state.options.chandelier.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'chandelier')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.chandelier.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'chandelier')} className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'tray')}
                         className={this.state.options.tray.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.tray.checked ? trayActive : tray} alt="Лоток питомца"/>
                      </div>
                      <span className={this.state.options.tray.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Лоток питомца</span>
                    </div>
                    <div className={this.state.options.tray.checked ? "calculator__counter": 'hide'}>
                      <div onClick={this.removeItem.bind(this, 'tray')} className="calculator__counter-left">-</div>
                      <div className="calculator__counter-middle">{this.state.options.tray.count} шт.</div>
                      <div onClick={this.addItem.bind(this, 'tray')} className="calculator__counter-right">+</div>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'drawer')}
                         className={this.state.options.drawer.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.drawer.checked ? drawerActive : drawer} alt="Фасады мебели"/>
                      </div>
                      <span className={this.state.options.drawer.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Фасады мебели</span>
                    </div>
                  </div>
                  <div className="calculator__option">
                    <div onClick={this.addOption.bind(this, 'bathtub')}
                         className={this.state.options.bathtub.checked ? "calculator__option-body calculator__option-body--active" : "calculator__option-body"}>
                      <div className="calculator__image-container">
                        <img src={this.state.options.bathtub.checked ? bathtubActive : bathtub} alt="Стены в ванной"/>
                      </div>
                      <span className={this.state.options.bathtub.checked ? "calculator__label-text calculator__label-text--white" : "calculator__label-text"}>Стены в ванной</span>
                    </div>
                  </div>
                </div>
                <div className="calculator__hoover">
                  <input className="calculator__hoover-input"
                         checked={this.state.isHoover}
                         type="checkbox"
                         onChange={this.editHoover}
                         id='hoover'
                  />
                  <label  className="calculator__hoover-label" htmlFor="hoover">у меня есть пылесос</label>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Адрес</span>
                </div>
                <div className="calculator__address">
                  <div className="calculator__address-container">
                    <input type="text" disabled={true} value={'Солигорск'} className="calculator__input--long"/>
                    <div className="calculator__input-container">
                      <input type="text" onChange={this.changeAddress} name="home" placeholder="Дом" className="calculator__input--short"/>
                      <input type="text" onChange={this.changeAddress} name="housing" placeholder="Корпус" className="calculator__input--short"/>
                    </div>
                  </div>
                  <div className="calculator__address-container">
                    <input type="text" onChange={this.changeAddress} name="street" placeholder="Улица" className="calculator__input--long"/>
                    <div className="calculator__input-container">
                      <input type="text" onChange={this.changeAddress} name="flat" placeholder="Квартира" className="calculator__input--short"/>
                      <input type="text" onChange={this.changeAddress} name="Entrance" placeholder="Подъезд" className="calculator__input--short"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Контактная информация</span>
                </div>
                <div className="calculator__userInfo">
                  <div className="calculator__userInfo-container">
                    <input type="text" onChange={this.changeUserInfo} name="name" placeholder="Имя" className="calculator__input--long"/>
                    <input type="text" onChange={this.changeUserInfo} name="phoneNumber" placeholder="Телефон" className="calculator__input--long"/>
                  </div>
                  <div className="calculator__userInfo-container">
                    <input type="text" onChange={this.changeUserInfo} name="e-mail" placeholder="e-mail" className="calculator__input--long"/>
                    <input type="text" onChange={this.changeUserInfo} name="lastName" placeholder="Фамилия" className="calculator__input--long"/>
                  </div>
                </div>
              </div>
              <div className="calculator__parameter-container">
                <div className="calculator__text">
                  <span className="calculator__header">Комментарий</span>
                </div>
                <div className="calculator__comment-container">
                  <textarea className="calculator__textArea" onChange={this.changeComment} name=""/>
                </div>
              </div>
            </div>
            <div className="calculator__order-info">
            <span className="calculator__order-info-header">
              {this.renderOrderHeader()}
            </span>
              <div className="calculator__order-info-container calculator__order-info-container--vertical">
                <span>Дополнительно:</span>
                <span className="calculator__text-blue">{this.renderOptionsList()}</span>
              </div>
              <div className="calculator__order-info-container">
                <span className="calculator__order-info-text">Продолжительность уборки:</span>
                <span className="calculator__order-info-text-blue">~ {this.countTime()}</span>
              </div>
              <div className="calculator__order-info-container">
                <span className="calculator__order-info-text">Дата уборки:</span>
                <span className="calculator__order-info-text-blue">{this.renderTimeDate()}</span>
              </div>
              <div className="calculator__order-info-container">
                <span className="calculator__order-info-text">К оплате:</span>
                <span className="calculator__order-info-text-blue">{this.countPrice()}</span>
              </div>
              <div className="calculator__order-info-container">
                <input className="calculator__order-info-input" type="text" placeholder="Промокод"/>
                <div className="calculator__order-info-button-code">Применить</div>
              </div>
              <div className="calculator__order-info-button-submit">Заказать уборку</div>
              <div className="calculator__order-info-agreement">
            <span>Нажимая кнопку, Вы принимаете условия
              <span><a  className="calculator__agreement-link" href=""> пользовательского соглашения</a></span>
            </span>
              </div>
            </div>
          </div>
          <Footer logo={logo}/>
        </div>
      </div>
    );
  }
}
export default Calculator;

