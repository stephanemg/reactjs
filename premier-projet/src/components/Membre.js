import React, { Fragment } from 'react'

const Membre = ({ membre, children }) => {
    return (
        <Fragment>
            <h2 style={{
                backgroundColor: membre.age > 52 ? 'purple' : 'green',
                color: 'white'
            }}>{membre.nom} age : {membre.age}
            </h2>
            {children ? <p>{children}</p> : <Fragment />}
        </Fragment>
    )
}

export default Membre