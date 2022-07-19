import React, { useState } from 'react';
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
    },
    label: {
        fontSize: '1.2rem',
        color: 'white'
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

    // Event handler for OnBlur event
    const handlingOnBlur = (e) => {
        // Validate the entered email address and then set 'errEmail'
        if (e.target.id === 'email') {
            const updatedErr = validateEmail(e.target.value) ? '' : 'Your email is invalid';
            setErrEmail(updatedErr);
        }
        // Chaeck if a user entered something to the message input and then set 'errMessage'
        else if (e.target.id === 'message') {
            const updatedErr = e.target.value.length ? '' : 'Message is required';
            setErrMessage(updatedErr);
        }
    };

    // Event handler for OnFocus event
    const handlingOnFocus = (e) => {
        // Reset variable belongs to the current focused input element to ''
        if (e.target.id === 'email') {
            setErrEmail('');
        }
        else if (e.target.id === 'message') {
            setErrMessage('');
        }
    };

    // Event handler for Submit event
    const handlingSubmit = (e) => {
        e.preventDefault();
        // Check if the entered email address and message values are valid
        if (!validateEmail(email) || !message.length) {
            alert(`Please enter valid inputs`);
            return;
        }
        alert(`Hello ${name}`);
        // Reset state variables
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
                        <label className='form-label' style={styles.label}>Name:</label>
                        <input className='form-control' value={name} id='name' name='name' type='text' onChange={handlingInputChange}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' style={styles.label}>Email address:</label>
                        <input className='form-control' value={email} id='email' name='email' type='email' onChange={handlingInputChange} onFocus={handlingOnFocus} onBlur={handlingOnBlur}></input>
                    </div>
                    <div className='mb-3'>
                        <label className='form-label' style={styles.label}>Message:</label>
                        <textarea className='form-control' value={message} id='message' name='message' type='text' onChange={handlingInputChange} onFocus={handlingOnFocus} onBlur={handlingOnBlur}></textarea>
                    </div>
                    {/* If there are any error messages, display them here  */}
                    <p className='mb-3' style={errEmail.length ? styles.display : styles.notDisplay}>{errEmail}</p>
                    <p className='mb-3' style={errMessage.length ? styles.display : styles.notDisplay}>{errMessage}</p>
                    <div>
                        <button type='button' className='btn btn-primary' onClick={handlingSubmit}>Submit</button>
                    </div>
                </form>
            </div >
        </div >
    )
}