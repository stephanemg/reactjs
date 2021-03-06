import React, { Component, createRef } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

//firebase

import base from './Base'

class App extends Component {
  //react-router cree des props immediatement disponibles pour app qui est englobé dedans
  // match.params contient l'association variable:contenu de l'url en cours d'utilisation au niveau du routage
  // donc contiendra pseudo:'valeur'
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  //pour gerer l'auto scroll, on crée une ref
  messagesRef = createRef()

  //au didMount on charge les messages en cours dans le state
  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  //a chaque fois que le state est maj
  //on fait une reference au dom de la div messages
  //le haut du scroll corresponds a la hauteur totale
  componentDidUpdate() {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  //on ajoute un message au state
  //on gere la limite de 10 messages
  addMessage = message => {
    //developpe les messages actuels pour les copier dans l'objet
    const messages = { ...this.state.messages }
    //on cree une cle timestamp pour stocker le nouveau message
    messages[`message-${Date.now()}`] = message
    //pour les elements du tableau avant les 10 derniers, on les remplace pour chaque cle par null
    //la synchro firebase le detectera
    Object.keys(messages).slice(0, -10).forEach(key => {messages[key] = null})
    //on met a jour le state pour rafraichir l'ecran
    this.setState({ messages })
  }

  //on verifie si le pseudo du message est le meme que celui connecte
isUser = pseudo => pseudo === this.state.pseudo

  //on execute la fonction addMessage dans le formulaire
  //on boucle sur le state en utisant la cle unique des messages
  //on recupere ensuite dans le tableau messages du state le pseudo et le message pour transmettre au
  //composant message
  //pour repositionner le scroll dans la div messages, on lui envoie une propriété ref
  //on envoie dans la balise message un pointeur sur la fonction isUser
  render() {
    const messages = Object.keys(this.state.messages)
      .map(key => (
        <Message pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
          key={key} 
            isUser = {this.isUser}
          />
      ))
    console.log(messages)

    return (
      <div className='box' >
        <div>
          <div className="messages" ref={this.messagesRef}>
            <div className="message">
              {messages}
            </div>
          </div>
        </div>
        <Formulaire addMessage={this.addMessage}
          pseudo={this.state.pseudo}
          length={140} />
      </div >
    )
  }
}

export default App
