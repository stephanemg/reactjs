import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette'

//composent d'administration, sert a charger les recettes de base 
//ajouter une recette par l'appel a la fonction App (ajouterRecette)
class Admin extends Component {
    render() {
        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={this.props.ajouterRecette}></AjouterRecette>
                <footer>
                    <button onClick={this.props.chargerExemple}>Remplir</button>
                </footer>
            </div>
        );
    }
}

export default Admin;