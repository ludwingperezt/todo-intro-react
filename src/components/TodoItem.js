import React from "react";

function TodoItem(props){
    const onComplete = () => {
        alert("Se ha completado el TODO " + props.text);
    }

    const onDelete = () => {
        alert("TODO borrado: "+ props.text)
    }

    return(
        <li>
            <span onClick={onComplete}>C</span>
            <p>{props.text}</p>
            <span onClick={onDelete}>X</span>
        </li>
    );
}

export { TodoItem };