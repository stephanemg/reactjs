import React, { Component } from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from "./components/Button";

const membres = {
  membre1: {
    nom: 'steph',
    age: 52,
    humain:true,
    attribut: 'je suis le maitre de maison'
  },
  membre2: {
    nom: 'valerie',
    age: 51,
    humain:true,
    attribut : 'je suis la femme du maitre de maison'
  },
  membre3: {
    nom: 'medor',
    age: 7,
    humain : false,
    attribut : 'je suis un chien'
  }
}

class App extends Component {
  state = { membres, isShow: false }

  handleClick = ans => {
    const membres = this.state.membres
    membres.membre1.age += ans
    this.setState(membres)
  }

  //handleChange est deja cree en fonction fléchée avec l'event du changement de texte qui contient le nom
  //l'id est le membre en cours d'iteration par map(), donc contient le membre en cours d'edition
  handleChange = (event, id) => {
    const membres = this.state.membres
    const nom = event.target.value
    console.log(nom)
    membres[id].nom = nom
    this.setState({ membres })
  }

  cacherNom = id => {
    const membres = this.state.membres
    membres[id].nom = 'X'
    this.setState(membres)
  }

 

  render() {
    const { titre } = this.props
    const { membres } = this.state


    //on constitue un tableau de cles -> objets en partant des membres
    //on passe au membre la fonction flechee avec le bon parametre du membre en cours
    //il faut donner une cle unique a chaque element de la liste
    const liste = Object.keys(membres).map(membre => (
      <Membre
        key={membre}
        handleChange = {event => this.handleChange(event, membre)}
        age={membres[membre].age}
        nom={membres[membre].nom}
        humain={membres[membre].humain}
        attribut={membres[membre].attribut}
        cacherNom={() => this.cacherNom(membre)} >
      </Membre>
    ))
//on retourne directement la liste constituée dynamiquement via le traitement précédent.
//la liste contient pour les composants enfants des appels en fonctions flechées paramétrées
    return (
      <div className="App">
        <h1>{titre}</h1>
        {liste}
        <Button vieillir={() => this.handleClick(2)} />
      </div >
    );
  }
}

export default App;