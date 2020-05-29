import React, { Fragment } from 'react'


//la fonction cacher nom est declaree au niveau parent par une fonction flechee
const Membre = ({ age, nom, children, cacherNom , humain, attribut, handleChange}) => {
    return (
        <Fragment>
            <h2 style={{
                backgroundColor: age > 52 ? 'purple' : 'green',
                color: 'white'
            }}>{nom} age : {age}
            </h2>
            {
                !humain ?
                <strong>{attribut}</strong>
                : null
            }
             <input value={nom} onChange={handleChange} type="text" />
            <button onClick={cacherNom}>X</button><br></br>
            {children ? <p>{children}</p> : <Fragment />}
        </Fragment>
    )
}

export default Membre