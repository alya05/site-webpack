import React, { Component}  from 'react';
import Flat from './Components/Pages/Flat/Flat';
import Calculator from './Components/Calculator/Calculator';
import { Switch, Route } from 'react-router-dom'


let defaultValues = {
  roomCount: 1,
  BathroomCount: 1
};

class Routes extends Component {

  changeStartOptions = (options) =>{
    defaultValues = options;

  };

  render() {
    return (
      <Switch>
        <Route exact path='/' component={() =><Flat changeStartOptions={this.changeStartOptions}/>}/>
        <Route path='/flat' component={() =><Flat changeStartOptions={this.changeStartOptions}/>}/>
        <Route path='/cottage' component={() =><Flat changeStartOptions={this.changeStartOptions}/>}/>
        <Route path='/order' component={() => <Calculator defaultValues={defaultValues}/>}/>
      </Switch>
    )
  }
}


export default Routes;