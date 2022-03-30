import React from 'react';

function Actor({ name, as }) {
    return (
        <>
            <h3>{name}</h3>
            <p>{`as ${as}`}</p>
        </>
    );
}

export default Actor;