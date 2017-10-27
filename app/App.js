import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <script src="https://use.fontawesome.com/b14f58fbd3.js"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
          <Routes/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


