import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'

function UpDown() {
    const myState = useSelector((state) => state.changeNumber)
    const dispatch = useDispatch()
    return (
        <div className='container text-center text-success' style={{margin: '30px auto'}}>
            <h3>Increase or decrease the number by clicking the buttons.</h3>
            <div className='content text-center'>
                <button className='btn btn-warning btn-sm' style={{textDecoration: 'none'}} onClick={() => dispatch(decNumber())}>
                    <span 
                        style={{
                            fontSize: '20px', 
                            cursor: 'pointer'}}>
                    -</span>
                </button>
                <input style={{width: '100px', fontSize: '28px'}} readOnly type="text" className='btn btn-sm' value={myState} />
                <button className='btn btn-danger btn-sm' style={{textDecoration: 'none'}} onClick={() => dispatch(incNumber())}>
                    <span
                        style={{
                            fontSize: '20px', 
                            cursor: 'pointer'}}>
                    +</span>
                </button>
            </div>
        </div>
    )
}

export default UpDown
