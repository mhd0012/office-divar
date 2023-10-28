import React from "react";
import {DataProduct} from "@/DataTypes/ProductData";
import {URL_MAIM} from "@/urls/urls";

const ThumbnailImage = ({image}:{image:string}) => {
    return (
        <div className='thumbnail-product'>
            <img src={URL_MAIM+image} className='border' alt={image}/>
        </div>
    )
}


export default ThumbnailImage