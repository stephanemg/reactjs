import React, { Component } from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from "./components/Button";

const membres = {
  membre1: {
    nom: 'steph',
    age: 52
  },
  membre2: {
    nom: 'valerie',
    age: 51
  },
  membre3: {
    nom: 'medor',
    age: 7
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {membres}
  }

  handleClick = ans => {
    const membres = this.state.membres
    membres.membre1.age += ans
    this.setState(membres)
  }
  handleChange = event => {
    const membres = this.state.membres
    const nom = event.target.value
    console.log(nom)
    membres.membre1.nom = nom
    this.setState({ membres })
  }
  render() {
    const { titre } = this.props
    const { membres } = this.state
    return (
      <div className="App">
        <h1>{titre}</h1>
        <input value={membres.membre1.nom} onChange={this.handleChange} type="text" />
        <Membre membre={membres.membre1} />
        <Membre membre={membres.membre2} >
          <strong>
            je suis ta femme
           </strong>
        </Membre>
        <Button vieillir={() => this.handleClick(2)} />
      </div>
    );
  }
}

export default App;