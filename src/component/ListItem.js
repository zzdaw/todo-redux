import React from 'react'

const ListItem = ({ task, remove, isConfirmed, id, handleChecked }) => {
    return (
        <li
            className={`liElem ${isConfirmed ? 'active' : ''}`}
            key={id}>
            <input className='checkbox' type="checkbox" checked={isConfirmed} onChange={() => handleChecked(id)} />
            {task}
            <i className="fas fa-times" onClick={() => remove(id)}></i>
        </li>
    )
}

export default ListItem;