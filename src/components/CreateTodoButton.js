import React from "react";

function CreateTodoButton(){
    
    function onCreateTodo () {
        console.log("Crear TODO");
    }

    return(
        <button onClick={onCreateTodo}>+</button>
    );
}

export { CreateTodoButton};