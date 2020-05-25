import React, { Fragment } from 'react'
import './drapeaux.css'

const Drapeau = ({drapeau}) => {
    return (
        <Fragment>
            <div class={drapeau}></div>
        </Fragment>
    );
};

export default Drapeau;