import React, { useState } from 'react'

const MainContent = () => {

    const style = {
        display: 'inline',
        verticalAlign: 'middle',
        margin: '0 5px',
        fontSize: '24px',
        cursor: 'pointer'
    }

    const [task, setTask] = useState('')
    const [id, setId] = useState(1)
    const [taskList, setTaskList] = useState([])

    const taskHandler = (e) => {
        e.preventDefault();
        if(task.length == 0){
            alert("Please add some task!!!")
            return
        }
        const updateId = id+1;
        setId(updateId)
        setTaskList([...taskList,{task:task, id:id}])
        setTask('')
    }

    const delTask = (id) => {
        const updated = taskList.filter(task => task.id !== id)
        setTaskList(updated)
    }

    return (
        <div className='container'>
            <div className='content text-center'>
                <i className='fas fa-clipboard-list text-muted' style={{fontSize: '5rem', margin: '10px'}}></i>
                <p className='text-muted'>Add your today's task below.</p>
            </div>
            <div className='form-control' style={{display: 'block'}}>
                <form onSubmit={taskHandler}>
                    <label htmlFor="inputtext" style={{fontWeight: 'bold', margin: '4px'}}>Enter your task: </label>
                    <input className='form-control' value={task} type="text" id='inputtext' placeholder='e.g. Build a web app' onChange={(e) => setTask(e.target.value)} />
                    <input className='btn btn-primary btn-sm' style={{margin: '6px'}} type='submit' value="Add Task" />
                </form>
            </div>
            {taskList.map((task) =>
                <div className='content' key={task.id}>
                    <ul style={{marginTop: '10px'}}>
                        <li style={{listStyle: 'none'}}>
                            <p style={style}>{task.id}.</p>
                            <h3 style={style}>{task.task}</h3>
                            <i style={style} className='fas fa-trash-alt text-danger' onClick={() => delTask(task.id)} ></i>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MainContent
