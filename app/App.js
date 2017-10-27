import React, {Component} from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <script src="https://use.fontawesome.com/b14f58fbd3.js"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
          <Routes/>
        </div>
      </HashRouter>
    );
  }
}

export default App;


