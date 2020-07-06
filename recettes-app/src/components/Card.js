import React from 'react';
//pour une carte recette contenant les elements de l'objet recette transmis par le bouclage du tableau dans <App>
//on formate les ingredients sous forme de liste avec des points
const Card = ({ details }) => {
    return (
        <div className="card">
            <div className="image">
                <img src={require(`../img/${details.image}`)} alt={details.nom} />
            </div>
            <div className="recette">
                <h2>{details.nom}</h2>
                <ul className="liste-ingredients">
                    {details.ingredients}
                </ul>
                <ol className="liste-instructions">
                    {details.instructions}
                </ol>
            </div>
        </div>
    );
}

export default Card;