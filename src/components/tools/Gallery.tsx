import React, {useState} from "react";
import ThumbnailImage from "@/Hooks/ThumbnailImage";
import {images} from "next/dist/build/webpack/config/blocks/images";
import {DataProduct} from "@/DataTypes/ProductData";
import {URL_MAIM} from "@/urls/urls";


// const Gallery = ({ images }) => {
//     return (
//         <div className="d-flex">
//             {images.map((image) => (
//                 <img key={image.id} src={image.image} style={{width : '200xp' , height:'100px'}} alt="Product Image" />
//             ))}
//         </div>
//     );
// };

export interface Data {
    product_images : [
        image:string
    ]
}

const Gallery = ({images, product}) => {
    console.log('product is : ', product)
    console.log('images is : ', images)
    console.log(URL_MAIM +'/'+ product.image)
    const [mainImage, setMainImage] = useState(product.image)
    const handleClick = (image:string) => {
        setMainImage(image)
    }

    return (
        <div>
            <ThumbnailImage image={mainImage}/>

            <div className="flex flex-wrap thumbnail-gallery" style={{marginLeft: '0', }}>


                <img className='basis-2/12'
                     style={{cursor: "pointer" , height:'110px'}}
                     src={URL_MAIM +'/'+ product.image}
                     onClick={() => handleClick(product.image)}
                />

                {images?.map((image:string, index:number) => (


                    <img className='basis-2/12'
                         style={{cursor: "pointer", height: '110px'}}


                         key={index}
                         src={URL_MAIM + image.image}
                         alt={`Image ${index + 1}`}
                         onClick={() => handleClick(image.image)}
                    />

                ))}
            </div>


        </div>
    );
};


export default Gallery;