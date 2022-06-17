import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event)=> {
    //     console.log(event.target.value);
    //     setInputValue (event.target.value)
    // Es lo mismo, se pueden usar ambos.

    const onInputChange = ({target})=> {
            // console.log(target.value);
            setInputValue (target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;
        

        //  inputValue.trim().length > 2 && setCategories(cats => [ inputValue, ...cats]);
        // console.log(inputValue);
        // setCategories (...inputValue)
        // setCategories (categories => [inputValue, ...categories ]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        // <form onSubmit={(event)=> onSubmit (event)}>
            <form onSubmit={onSubmit}>
                
                <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={ (event )=>onInputChange (event)} // se pueden usar los 2
                onChange={ onInputChange }
            />
        </form>
    )
}