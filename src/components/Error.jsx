import React from 'react'

function Error(props) {
    const {descripcion} =props;
    return (
        <p className="alert alert-danger" role="alert">{descripcion}</p>
    )
}

export default Error