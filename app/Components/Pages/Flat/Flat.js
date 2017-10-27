import React, { Component } from 'react';
import './Flat.less';
import MainSection from 'app/Components/Sections/MainSection/MainSection';
import RelaxSection from 'app/Components/Sections/RelaxSection/RelaxSection';
import TrustSection from 'app/Components/Sections/TrustSection/TrustSection';
import DescriptionSection from 'app/Components/Sections/DescriptionSection/DescriptionSection';
import CleanersSection from 'app/Components/Sections/CleanersSection/CleanersSection';
import FAQSection from 'app/Components/Sections/FAQSection/FAQSection';
import FeedbackSection from 'app/Components/Sections/FeedbackSection/FeedbackSection';
import ProcessingSection from 'app/Components/Sections/ProcessingSection/ProcessingSection';
import BottomCalculator from 'app/Components/Sections/Bottom-Calculator/Bottom-Calculator';
import logo from 'app/images/main_logo_colorfull.png';
import {CircleLoader} from 'react-spinners';

import * as PRICES from 'app/constants/price';
import Footer from 'app/Components/Footer/Footer';

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bathroomCount: 1,
      roomCount: 1,
      price: PRICES.BASE_PRICE,
      visible: false
    }
  }

  componentWillMount() {
    this.setVisible();
  }

  setVisible = () => {
    setTimeout(() => {
      this.setState({visible: true});
    }, 1000);
  };


  addRoom = () => {
    if (this.state.roomCount === 5) {
      return;
    }
    this.setState({
      roomCount: ++this.state.roomCount
    });

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
    });
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

  countPrice = () => {
    let price = 0;
    price += PRICES.BASE_PRICE
      + (this.state.roomCount-1)*PRICES.ROOM_PRICE
      + (this.state.bathroomCount-1)*PRICES.BATHROOM_PRICE;
    this.props.changeStartOptions({roomCount: this.state.roomCount,bathroomCount: this.state.bathroomCount});
  return price;
  };

  render() {

    const price = this.countPrice();
    return (
      <div className="flat">
        <div className={this.state.visible ? 'hide': 'spinner'}>
          <CircleLoader loading={!this.state.visible} color={'#2ebaa7'}/>
        </div>
        <div className={this.state.visible ? 'container--visible': 'container'}>
          <MainSection addRoom={this.addRoom}
                       addBathRoom={this.addBathRoom}
                       removeRoom={this.removeRoom}
                       logo={logo}
                       removeBathRoom={this.removeBathRoom}
                       roomCount={this.state.roomCount}
                       bathroomCount={this.state.bathroomCount}
                       price={price}/>
          <RelaxSection/>
          <TrustSection/>
          <DescriptionSection/>
          <CleanersSection/>
          <FAQSection/>
          <ProcessingSection/>
          <FeedbackSection/>
          <BottomCalculator price={price}/>
          <Footer logo={logo}/>
          </div>
      </div>
    );
  }
}

export default Flat;
