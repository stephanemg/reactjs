import React, { Component } from 'react'
// CSS
import './App.css'

import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
import recettes from './recettes'

//firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  //connection a firebase, synchronisation du state
  //on recupere une reference afin de desynchroniser lorsque l'utilisateur se deconnecte, a l'aide d'une ref
  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

  //a la deconnection on desynchronise
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }

  //charge dans le state de app le fichier recettes, par l'intermédiaire du bouton du composant Admin
  chargerExemple = () =>
    this.setState({ recettes })

  render() {
    //on genere dans cards un tableau de components <Card> rempli avec le sous contenu de chaque recette
    //on le restitue dans la div cards
    const cards = Object.keys(this.state.recettes).map(key => <Card key={key} details={this.state.recettes[key]}></Card>)
    console.log(cards)

    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}></Header>
        <div className='cards'>
          {cards}
        </div>
        <Admin
          chargerExemple={this.chargerExemple}></Admin>
      </div>
    )
  }
}

export default App
