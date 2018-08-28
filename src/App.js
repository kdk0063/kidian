import React, {Component} from 'react';
import Routes from './Routes';
import Nav from './components/Nav';
import AboutFooter from './components/AboutFooter';
// import GotSole from './components/GotSole';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Routes />  
        <AboutFooter />

      </div>
    );
  }
}
export default App;