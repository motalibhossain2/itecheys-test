import React, { useState } from 'react'

import Todos from './Todos'
import Createtodo from './Createtodo'

const Maintodo = () => {
    const [tasks, setTasks] = useState([])



    const CollectFormdata = (todos) => {
        setTasks((pretask) => {
            return [...pretask, todos]
        })
    }
    console.log("All task =", tasks)

    const removeTask = (index) => {
        setTasks((pretask) => {
            const filteredTodos = pretask.filter((i,ItemIndex) =>index !== ItemIndex);
            return filteredTodos;
        })
    }
    console.log("final task",tasks)

    return (
        <div>
            <div className="row">
                <div className="col-lg-7">
                    <Todos onTask={tasks} onRemove={removeTask} />
                </div>
                <div className="col-lg-5">
                    <Createtodo onCreate={CollectFormdata} />
                </div>
            </div>
        </div>
    )
}

export default Maintodo