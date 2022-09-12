import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { FaMixer, FaRegTimesCircle } from 'react-icons/fa';


const Task = ({ task, ondelate }) => {
    return (
        <div>
            {/* <h3 key={task.id}>Daily task name {task.name}</h3> */}
            <Alert key={task.id}>
                <div className="row">
                <div className='col-lg-6'>
                    This is a {task.name} alert—check it out!
                </div>
                <div className='col-lg-6 text-end'>
                    {/* <FaRegTimesCircle onDelete={()=>ondelate(task.id)} /> */}
                    <FaRegTimesCircle onClick={()=>ondelate(task.id)} />
                </div>
                </div>
            </Alert>
        </div>
    )
}

export default Task