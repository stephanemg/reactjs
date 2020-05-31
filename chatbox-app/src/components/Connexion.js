import React, { Component } from 'react'
import { redirect, Redirect } from 'react-router-dom'

class Connexion extends Component {
    state = {
        pseudo: '',
        gotoChat: false
    }
    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }
    //on annule la gestion du navigateur
    handleSubmit = event => {
        event.preventDefault()
        this.setState({ gotoChat: true })
    }
    //le formulaire amene par le submit a activer le chat a true
    //ce qui retourne un redirect vers la page /pseudo avec le pseudo renseigné et mis dans le state
    //le push dans redirect ajout la page de connexion dans l'historique
    render() {
        if (this.state.gotoChat) {
            return (
                <Redirect push to={`/pseudo/${this.state.pseudo}`} />
            )
        }
        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={this.handleSubmit}>
                    <input placeholder="Pseudo"
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                        type="text"
                        required />
                    <button type="submit">GO</button>
                </form>
            </div>
        );
    }
}

export default Connexion;