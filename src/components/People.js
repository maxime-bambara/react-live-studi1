import React from 'react';

import PropTypes from 'prop-types';


function People(props){
    return(
        <div style={{
            textAlign:"center",
            width:100,
            border: "1px solid black", 
            borderRadius:4}}>

            {props.picture && <img src={props.picture} />}
            <h4>{props.name}</h4>
            {props.age && <span>{props.age}</span>}

        </div>
    );
}

People.propTypes = {
    picture : PropTypes.string,
    name : PropTypes.string.isRequired,
    age : PropTypes.number,
}

export default People;