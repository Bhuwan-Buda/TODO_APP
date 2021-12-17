import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from './actions/index'

function Contact() {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const myData = useSelector((state) => state.addContact.detail)

    const updateContact = () => {
        if (email.length === 0 || message.length === 0){
            alert("Please provide your details!!")
            return 
        }
        dispatch(addContact(email, message), setEmail(''), setMessage(''))
    }

    return (
        <>
        <div className='container text-center'>
            <i className='fas fa-envelope text-muted' style={{fontSize: '5rem', margin: '10px'}}></i>
            <p className='text-muted'>Please leave your feedback.</p>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email: </span>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="form-control" placeholder="Your email..."/>
            </div>
            <div className="input-group">
                <span className="input-group-text">Message:</span>
                <textarea 
                    className="form-control" 
                    placeholder="Your message..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    style={{height: '100px'}} 
                    aria-label="With textarea"></textarea>
            </div>
            <div className="input-group md-flex justify-content-md-end">
                <button
                    className='btn btn-outline-primary btn-md'
                    style={{margin: "5px 0", float: "right"}} 
                    onClick={updateContact}>Send</button>
            </div>
        </div>
        <div className="container">
            <h3>Recent messages 👇 </h3>
            {myData.map((data) => {
                return(
                    <div className="content text-muted" style={{marginBottom: '45px', border: '1px solid #ddd', padding: '4px 6px 0 6px'}} key={data.email}>
                        <h6>👉Email: {data.email}</h6>
                        <p>Message: {data.message}</p>
                    </div>
                )
            })}
        </div>
        
        </>
    )
}

export default Contact
