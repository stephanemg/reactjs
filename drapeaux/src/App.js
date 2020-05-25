import React, { Component, Fragment } from 'react';
import './App.css';
import Drapeau from "./Drapeau"

const drapeaux = ['france', 'allemagne']

class App extends Component {
  
  constructor() {
    super()
    this.state = {drapeau:drapeaux[0]}
  }
  render() {
    return (
      <Fragment>
      <label>
        Choisissez votre drapeau :
    
      <select value={this.state.drapeau} onChange={this.handleChange}>
        {drapeaux
          .map((location, index) => <option key={index}>{location}</option>)}
          </select>
      </label>
      <Drapeau drapeau={this.state.drapeau}></Drapeau>
      </Fragment>
    )
  }
  handleChange = event => {
   
    const drapeau = event.target.value
    debugger
   this.setState({drapeau})
  }
}

export default App;
