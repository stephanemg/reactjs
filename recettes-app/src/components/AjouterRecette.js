import React, { Component } from 'react';

//composant ayant son state relié au formulaire pour l'ajout d'une recette
//le formulaire a une methode onChange afin de modifier localement a la classe le state
//une methode onsubmit pour ajouter la recette au niveau du state global
class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }

    //on crée une fonction dynamique pour gerer le changement de chaque element du formulaire
    //on destructure la cible de l'evenement (couple nom / valeur) et on appele directement le setState pour affecter la valeur au state, la cle porte le meme nom que la propriété du state
    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    //supplante l'action par defaut du submit
    //on copie l'objet state
    //on appele la methode ajouterRecette envoyée dans les props du composant par le composant Admin
    handleSubmit = event => {
        event.preventDefault()
        const recette = { ... this.state }
        this.props.ajouterRecette(recette)
        //on remet a zéro le formulaire du composant <AjouterRecette> ayant appelé le submit
        Object.keys(recette).forEach(item => { recette[item] = '' })
        this.setState(recette)
    }

    render() {
        return (
            <div className="card">
                <form action="" className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                    <input value={this.state.nom} onChange={this.handleChange} name="nom" type="text" placeholder='Nom de la recette' />
                    <input value={this.state.image} onChange={this.handleChange} name="image" type="text" placeholder={'Nom de l\image'} />
                    <textarea value={this.state.ingredients} onChange={this.handleChange} name="ingredients" rows="3" placeholder='Liste des ingrédients'></textarea>
                    <textarea value={this.state.instructions} onChange={this.handleChange} name="instructions" rows="3" placeholder='Liste des instructions'></textarea>
                    <button type="submit">Ajouter une recette</button>
                </form>
            </div>
        );
    }
}

export default AjouterRecette;