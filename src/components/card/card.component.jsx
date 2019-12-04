import React from 'react'

import './card.styles.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="Monsters" src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <p> {props.monster.name}</p>
    <p>{props.monster.email}</p>
        </div>
    )
}