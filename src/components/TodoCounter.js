import React from "react";

function TodoCounter() {
    return (
        <h2>Placeholder!</h2>
    );
}

/**
 * Con esta exportación:
 * export default TodoCounter;
 * 
 * Es posible cambiar el nombre del elemento en el punto de importación,
 * por ejemplo, esto sería válido:
 * 
 * import xxx from './components/TodoCounter';
 * 
 * ==========================================================================
 * 
 * Con este otro tipo de importación se obliga a cualquiera que importe
 * la función a usar el mismo nombre que se le ha dado en la exportación,
 * 
 * export { TodoCounter };
 * 
 * Por ejemplo:
 * 
 * import { TodoCounter } from './components/TodoCounter';
 */
export { TodoCounter };