import React, { useState } from 'react'
import { addTask, deleteTask } from './actions/index'
import { useSelector, useDispatch } from 'react-redux'


const MainContent = () => {

    const style = {
        display: 'inline',
        verticalAlign: 'middle',
        margin: '0 5px',
        fontSize: '24px',
        cursor: 'pointer'
    }

    const [task, setTask] = useState('')
    const dispatch = useDispatch();
    const myTask = useSelector((state) => state.addTask.list);
    
    return (
        <div className='container'>
            <div className='content text-center'>
                <i className='fas fa-clipboard-list text-muted' style={{fontSize: '5rem', margin: '10px'}}></i>
                <p className='text-muted'>Add your today's task</p>
            </div>
            <div className='form-control' style={{display: 'block', boxSizing: 'border-box', boxShadow: '0 0 4px 2px #ddd'}}>
                <label htmlFor="inputtext" style={{fontWeight: 'bold', margin: '4px'}}>Enter your task: 👇 </label>
                <input className='form-control' value={task} type="text" id='inputtext' placeholder='✍ Add tasks...' onChange={(e) => setTask(e.target.value)} />
                <button className='btn btn-primary btn-sm' style={{margin: '6px'}} onClick={() => dispatch(addTask(task), setTask(''))}>Add Task</button>
            </div>
            {myTask.map((task) =>
                <div className='content' style={{margin: '30px 0 45px 0',  border: '1px solid #ddd', padding: '4px 6px 0 6px'}} key={task.id}>
                    <ul style={{marginTop: '10px', boxSizing: 'border-box'}}>
                        <li style={{listStyle: 'none'}}>
                            <i style={style} className='fas fa-arrow-right'></i>
                            <h3 style={style}>{task.data}</h3>
                            <i style={style} className='fas fa-trash-alt text-danger' onClick={() => dispatch(deleteTask(task.id))}></i>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MainContent
