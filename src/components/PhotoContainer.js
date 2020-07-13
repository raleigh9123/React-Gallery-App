import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import {useParams} from 'react-router-dom';

const PhotoContainer = ({data}) => {

    //Take search parameters from the URL and pass string into the data object to return queried object
    let {search} = useParams();
    if(search === 'React-Gallery-App') {
      search = 'mountain';
    }
    let dataObject = data[`${search}`]

    //Declare photos variable. .map() over the object and return photo components for each image in object.
    let photos='';
    if(dataObject) {
        let photosMap = dataObject.map(image => <Photo id={image.id} farmID={image.farm} serverID={image.server} secret={image.secret} title={image.title} key={image.id}/>)
        photos = photosMap;
    }
    //Determine if photos exist. If not, will return value '0'
    let photosExist = photos.length;

    //If photos exist, load header text for query, else header will produce 'loading...'
    //If photos exist, render the photos, else render Not Found component
    return (
        <div className="photo-container">
                <h2>{photosExist ? search : 'Loading...'}</h2>
                <ul>
                    {photosExist ? photos : <NotFound query={search}/>}
                </ul>
        </div>
    );
};

export default PhotoContainer;
