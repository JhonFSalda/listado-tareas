import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import './TodoItem.css'

function TodoItem(props) {

    return (
        <li className='TodoItem'>
            <FontAwesomeIcon onClick={props.onComplete} className={`check ${props.completed && 'check--completed'}`} icon={faCheck} />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`} >{props.text}</p>
            <FontAwesomeIcon onClick={props.onDelete} className='xmark' icon={faXmark} />
        </li>
    );
}

export { TodoItem };