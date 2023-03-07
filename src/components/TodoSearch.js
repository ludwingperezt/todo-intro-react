import React from "react";

function TodoSearch() {

    const onSearchValueChange = (event) => {
        // en event.target.value está el valor que escribió el usuario
        console.log(event.target.value);
    }

    return (
        <input onChange={onSearchValueChange} placeholder="Buscar TODO" />
    );
}

export { TodoSearch };