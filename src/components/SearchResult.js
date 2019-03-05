import React from 'react';

const onClick = (e) => {
    // Maybe do something
}

const SearchResult = (props) => (
    <div>
        <img src={props.img}/>
        {props.owner}        
        {props.name}
        {props.description}
        <button
            onClick={onClick}
        >Rent</button>
    </div>
)

export default SearchResult;