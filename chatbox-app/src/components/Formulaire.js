import React, { Component } from 'react';

class Formulaire extends Component {
    //le nombre maximal de caracteres est envoyé par App
    state = {
        message: '',
        length: this.props.length
    }

    //a l'envoi du message
    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }
    //en cours d'edition de message
    //le nombre de caracteres restants est dynamiquement mis a jour ici
    handleChange = event => {
        const message = event.target.value
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    //si la touche est entrée on simule un submit
    handleKeyUp = event => {
        if (event.key === 'Enter') {
            this.createMessage()
        }
    }

    //on cree un message associé avec le pseudo
    //on destructure les props envoyées par <App> pour recuperer la fonction d'ajout de message et du pseudo
    //on cree un message avec pseudo associé retourné au parent <App> , <App> creera un identifiant unique
    //base sur le timestamp sous la forme :
    //{message-xxxxyyyyxxx : {message: 'titi toto', pseudo:'monPseudo'}}
    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo, message: this.state.message
        }
        addMessage(message)
        //on vide le formulaire
        this.setState({ message: '', length })
    }

    //la zone de texte est limitée a la length initiale en creation de formulaire (envoyé par App a 140)
    //textArea est en double binding sur le message stocké dans le state du composant
    //handleKeyUp permet de detecter si Entrée est appuyée pour envoi du message
    render() {
        return (
            <form className="form"
                onSubmit={this.handleSubmit}>
                <textarea required
                    maxLength={this.props.length}
                    onChange={this.handleChange}
                    value={this.state.message}
                    onKeyUp={this.handleKeyUp}
                />
                <div className="info">
                    {this.state.length}
                </div>
                <button type="submit">
                    Envoyer!
               </button>
            </form>
        );
    }
}

export default Formulaire;