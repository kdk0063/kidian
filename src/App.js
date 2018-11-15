import React, {Component} from 'react';
import Nav from './components/Nav';
import Routes from './Routes';
import AboutFooter from './components/AboutFooter';
import './css/App.css';

class App extends Component {

  render() {
    return (
            <div className="App Site">
                <div className="Site-content">
                    <div className="App-header">
                        <Nav />
                    </div>
                    <div className="main">
                        <Routes />
                    </div>
                </div>
                <AboutFooter />
            </div>
          
    );
  }
}
export default App;
