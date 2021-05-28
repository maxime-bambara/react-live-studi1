import React from "react";
import People from "./People";

import PropTypes from "prop-types";

function PeopleList(props){
    const peoples = props.peoples;

    return (
    <>
        {peoples.map((people) => {
            return (<People key={people.name + people.age}
                picture={people.picture} 
                name={people.name} 
                age={people.age} />)
            }
        )   
    }
    </> 
    )
    ;
}

PeopleList.propTypes = {
    peoples : PropTypes.arrayOf((arr, index, componentName) =>{
        const people = arr[index];
        const keys = Object.keys(people);
        if (keys.some((value ) => !["picture", "name", "age"].includes(value))){
            return new Error ("bad array");
        }
        })
}

export default PeopleList
