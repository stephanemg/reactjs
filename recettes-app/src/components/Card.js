import React from 'react';
//pour une carte recette contenant les elements de l'objet recette transmis par le bouclage du tableau dans <App>

const Card = ({ details }) => {
    //on formate les ingredients sous forme de liste avec des points, on separe par la virgule
    //on cree les elements <li> html avec un identifiant react unique pour la maj
    const ingredients = details.ingredients.split(',').map(item => <li key={item}>{item}</li>)
    const instructions = details.instructions.split('\n').map(item => <li key={item}>{item}</li>)
    //au cas ou une image n'est pas valide, on rebranche sur l'image par defaut
    const requireImage = chemin => {
        try {
            return require(`../img/${chemin}`)
        } catch (err) {
            return require(`../img/default.jpeg`)
        }
    }
    return (
        <div className="card">
            <div className="image">
                <img src={requireImage(details.image)} alt={details.nom} />
            </div>
            <div className="recette">
                <h2>{details.nom}</h2>
                <ul className="liste-ingredients">
                    {ingredients}
                </ul>
                <ol className="liste-instructions">
                    {instructions}
                </ol>
            </div>
        </div>
    );
}

export default Card;