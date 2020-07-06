import React from 'react'

const Header = ({ pseudo }) => {
    //on teste le premier caractere de pseudo si c'est une voyelle
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    return (
        <header>
            <h1>La boite à recettes {formatPseudo(pseudo)}</h1>
        </header>
    )
}

export default Header