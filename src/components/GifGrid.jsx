import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useEffectGifs } from "../hooks/useEffectGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useEffectGifs( category );

    

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading  && (<h2>Cargando...</h2>)
            }
            

            
            <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem
                        key = {image.id}
                        {...image}

                       // title = {image.title}
                        // url = {image.url}
                    />
                ))


            }

                </div>
           
        </>
    )
}

// no debemos colocar la ejecucion de una funcion dentro de un funcional component, va a volver a pedir la
// peticion http