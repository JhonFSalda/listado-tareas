import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2 className='TodoCounter'>Completados: {completedTodos} de {totalTodos}</h2>
        // <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos >= 1 ? 'Tarea' : 'Tareas' }</h2>
    );
}

export { TodoCounter };