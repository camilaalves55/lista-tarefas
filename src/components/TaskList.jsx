import Task from './Task';
// import React from './react';

const Tasklist = ({tasks}) => {
    return (
        <ul>
            {tasks.map((task, index) =>(
                <Task key={index} TaskName={task}/>
            ))}
        </ul>
    )
}

export default Tasklist;