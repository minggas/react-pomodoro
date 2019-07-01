import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SetTimer =  (props) => {
    return (
        <div>
            <label htmlFor={props.values.id}>
                <p id={props.values.label}>{props.values.name}</p>
                <button className="minus" id={props.values.dec} onClick={props.setTime}>-</button>
                <span id={props.values.id}>{props.values.value}</span>
                <button className="plus" id={props.values.inc} onClick={props.setTime}>+</button>
            </label>
        </div>
    )
}

SetTimer.propTypes = {
    values: PropTypes.object.isRequired,
    setTime: PropTypes.func.isRequired
}


export default SetTimer;