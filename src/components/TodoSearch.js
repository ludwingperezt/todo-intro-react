import React from "react";

function TodoSearch() {

    // Este es un React Hook para usar el estado.
    // Al llamar a React.useState('') estamos creando un estado que por defecto
    // será un string vacío.  La llamada a esa función retorna un array con dos
    // elementos:
    // - El primero es el valor actual de ese estado.
    // - El segundo es una función para cambiar el valor de ese estado.
    const [searchValue, setSearchValue] = React.useState('');

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