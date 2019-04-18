import ListItem from './ListItem';
import React from 'react'

const List = ({ tasks, remove, handleChecked }) => {
    const task = tasks.map(el => {
        return <ListItem task={el.task} key={el.id} id={el.id} remove={remove} isConfirmed={el.isConfirmed} handleChecked={handleChecked} />
    })
    return (
        <>
            <ul className='listContainer'>
                {task}
            </ul>
            {/* <div className='filterContainer'>
                <button className='active'>Active</button>
                <button className='all'>All</button>
                <button className='complete'>Complete</button>
            </div> */}
        </>
    )
}
export default List;