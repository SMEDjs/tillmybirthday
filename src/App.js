import React, { Component } from 'react';
import './App.css';
import countdown from 'countdown'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
     
        <p className="App-intro">
          in {countdown( new Date(1606694400000) ).toString()}
        </p>
  
    );
  }
}

export default App;
