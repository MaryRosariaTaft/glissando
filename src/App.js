import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Calendar from './Calendar.js';
import Students from './Students.js';
import Payments from './Payments.js';
import Settings from './Settings.js';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="title-bar center">
          {/* todo */}
          <h2>Glissando</h2>
        </div>
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="page">
          <Route path="/" exact component={Home} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/students" component={Students} />
          <Route path="/payments" component={Payments} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

export default App;
