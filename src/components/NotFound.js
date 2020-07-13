import React from 'react';

const NotFound = ({query}) => {
    return (
        <li className="not-found">
            <h3>No Results Found for {query} </h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    )
}

export default NotFound;