import React from 'react';
import './Team.css';

const Team = (props) => {
    const { picture, name, weight, unitPrice, Types, company } = props.team;
    return (
        <div className='team'>
            <img src={picture} alt="" srcset="" />
            <h3> {name}</h3>
            <h3>Color : {Types}</h3>
            <h3>Weight : {weight}</h3>
            <h3>Price  : TK {unitPrice}</h3>
            <h3>Company Name:{company}</h3>
            <button onClick={() => props.handleAddToCart(props.team)} className="btn"> Add Cart</button>

        </div>
    );
};

export default Team;