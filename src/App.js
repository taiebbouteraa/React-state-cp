import React, { Component } from 'react'
import img from './profile.jpg'
import './App.css';

export default class App extends Component {
state = {
  fullName : 'Mohamed Taieb Bouteraa',
  bio : 'no bio',
  imgSrc : img,
  profession : 'no profession',
  showState : false,
  counter: 0,
}
handleShow = () => this.setState({showState: !this.state.showState})
counting = () => this.setState({ counter: this.state.counter + 1 })
componentDidMount() {
  setInterval(this.counting, 1000)
}
  render() {
    return (
      <div className='main'>
        <h2>{this.state.counter} seconds</h2>
        <button onClick={this.handleShow}>{this.state.showState ? 'Hide' : 'Show'}</button>
        { this.state.showState ?
          (<div>
          <img src={this.state.imgSrc} style={{width:250,borderRadius:250}}/>
          <h1>{this.state.fullName}</h1>
          <p>{this.state.bio}</p>
          <p>{this.state.profession}</p>
        </div>) : null
        }
      </div>
    )
  }
}
