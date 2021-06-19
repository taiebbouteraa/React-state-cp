//rcc ==> to get a class based component ↓

import React, { Component } from 'react'

export default class App extends Component {
  //the state is always an object
  state = {
    count : 0,
    isShown : true,
  }
  incriment = () => this.setState({count: this.state.count + 1}) //ss ==> setState
  decrement = () => this.setState({count: this.state.count - 1})
  handleShow = () => this.setState({isShown: !this.state.isShown})
  render() {
    return (
      <div>
        
        <button onClick={this.handleShow}>show</button>
        { this.state.isShown ? (  // var ?  value if true : value if false      
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.incriment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
        ) : null
        }
      </div>
    )
  }
}


useEffect(() => {
  const interval = setInterval(() => {
    console.log('This will run every second!');
  }, 1000);
  return () => clearInterval(interval);
}, []);