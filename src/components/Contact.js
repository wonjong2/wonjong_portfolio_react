import React, { useState } from 'react';
import { validateEmail } from '../util/helpers';

const styles = {
    width: {
        width: '50%',
        minWidth: '300px'
    }
};

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({ email: '', message: '' });

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

    const handlingOutFocus = (e) => {
        let updatedErr = error;

        if (e.target.id === 'email') {
            updatedErr.email = validateEmail(e.target.value) ? '' : 'Your email is invalid';
            setError(updatedErr);
        }
        else if (e.target.id === 'message') {
            updatedErr.message = e.target.value.length ? '' : 'Message is required';
            setError(updatedErr);
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
                        <label className='form-label' for='name'>Name:</label>
                        <input className='form-control' value={name} id='name' name='name' type='text' onChange={handlingInputChange}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' for='email'>Email address:</label>
                        <input className='form-control' value={email} id='email' name='email' type='email' onChange={handlingInputChange} onFocus={handlingOutFocus} onBlur={handlingOutFocus}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' for='message'>Message:</label>
                        <textarea className='form-control' value={message} id='message' name='message' type='text' onChange={handlingInputChange} onFocus={handlingOutFocus} onBlur={handlingOutFocus}></textarea>
                    </div>
                    {error.email.length > 0 && <p className='mb-3'>{error.email}</p>}
                    {error.message.length > 0 && <p className='mb-3'>{error.message}</p>}
                    <div>
                        <button type='button' className='btn btn-secondary' onClick={handlingSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}