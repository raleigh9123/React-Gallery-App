import React from 'react'

const Photo = ({id, secret, farmID, serverID, title}) => {

    return (
        <li>
            <img src={`https://farm${farmID}.staticflickr.com/${serverID}/${id}_${secret}.jpg`} alt={title} />
        </li>
    )
}

export default Photo;