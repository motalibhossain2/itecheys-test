import React from 'react'

import Task from './Task'
import AddTask from './AddTask'

const Tasks = ({ tasks, ondelate }) => {
    return (
        <div className='mt-5'>
            <div className="row">
                <div className="col-lg-9"></div>
                <div className="col-lg-3 mb-5 text-end">
                    <AddTask></AddTask>
                </div>
            </div>
            {tasks.map((task) => {
                return <Task task={task} key={task.id} ondelate={ondelate}></Task>
            })}
        </div>

    )
}

export default Tasks