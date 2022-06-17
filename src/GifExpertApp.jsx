import React from 'react'
import {useState} from 'react';
import {AddCategory, GifGrid} from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch',  ]);

    const onAddCategory = (newCategory) =>{
        // validar si se repite
        if (categories.includes(newCategory) ) return;
        // Agregar valorant
        // categories.push('Valorant');
        setCategories([newCategory,...categories ]) // Esta es preferible, se puede cambiar el orden
        // setCategories(cat => [...cat, 'Valorant']);

    }
    return (
        <>
            {/*Titulo */}
            <h1>GifExpertApp</h1>

            {/*Input */}
            <AddCategory

                onNewCategory = { onAddCategory }

                />

            {/*Listado de Gif*/}
            {/* <ol> */}
                {
                    categories.map((category) => (
                        <GifGrid
                        key={category}
                        category= {category}
                         />
                    ))
                }






            {/* </ol> */}
            {/*Gif Item */}
        </>

    )
};

     /* // no es necesario return
                    //    (
                    //             <div key={category}>
                    //                 <h3>{category}</h3>
                    //                 <li>{category}</li>
                    //             </div>
                    //     )
                        // <li key={category}>{category}</li>
                // ) */