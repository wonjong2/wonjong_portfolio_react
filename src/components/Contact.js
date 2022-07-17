import React, { useState, useEffect } from 'react';
import { validateEmail } from '../util/helpers';

const styles = {
    width: {
        width: '50%',
        minWidth: '300px'
    },
    display: {
        display: 'block'
    },
    notDisplay: {
        display: 'none'
    }
};

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const handlingInputChange = (e) => {
        if (e.target.id === 'name') {
            setName(e.target.value);
        }
        else if (e.target.id === 'email') {
            setEmail(e.target.value);
        }
        else if (e.target.id === 'message') {
            setMessage(e.target.value);
        }
    }

    const handlingOnBlur = (e) => {
        if (e.target.id === 'email') {
            const updatedErr = validateEmail(e.target.value) ? '' : 'Your email is invalid';
            setErrEmail(updatedErr);
        }
        else if (e.target.id === 'message') {
            const updatedErr = e.target.value.length ? '' : 'Message is required';
            setErrMessage(updatedErr);
        }
    };

    const handlingOnFocus = (e) => {
        if (e.target.id === 'email') {
            setErrEmail('');
        }
        else if (e.target.id === 'message') {
            setErrMessage('');
        }
    };

    const handlingSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${name}`);
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <h3>Contact</h3>
            <div className='input-group pt-3'>
                <form className='form' style={styles.width}>
                    <div className='mb-3'>
                        <label className='form-label'>Name:</label>
                        <input className='form-control' value={name} id='name' name='name' type='text' onChange={handlingInputChange}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Email address:</label>
                        <input className='form-control' value={email} id='email' name='email' type='email' onChange={handlingInputChange} onFocus={handlingOnFocus} onBlur={handlingOnBlur}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Message:</label>
                        <textarea className='form-control' value={message} id='message' name='message' type='text' onChange={handlingInputChange} onFocus={handlingOnFocus} onBlur={handlingOnBlur}></textarea>
                    </div>
                    <p className='mb-3' style={errEmail.length ? styles.display : styles.notDisplay}>{errEmail}</p>
                    <p className='mb-3' style={errMessage.length ? styles.display : styles.notDisplay}>{errMessage}</p>
                    <div>
                        <button type='button' className='btn btn-secondary' onClick={handlingSubmit}>Submit</button>
                    </div>
                </form>
            </div >
        </div >
    )
}