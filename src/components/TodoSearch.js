import React from "react";

function TodoSearch({ searchValue, setSearchValue }) {

    const onSearchValueChange = (event) => {
        // Cuando el usuario escribe algo en el input de búsqueda, se actualiza
        // el estado con lo que el usuario ha escrito.

        // en event.target.value está el valor que escribió el usuario
        console.log(event.target.value);

        setSearchValue(event.target.value);
    }

    // React solo es capaz de procesar un elemento raíz que es retornado como
    // resultado del componente, sin embargo también es posible retornar un
    // array con la lista de elementos a renderizar.
    return [
        <input 
            onChange={onSearchValueChange} 
            placeholder="Buscar TODO" 
            value={searchValue} />,
        <p>{searchValue}</p>
    ];
}

export { TodoSearch };