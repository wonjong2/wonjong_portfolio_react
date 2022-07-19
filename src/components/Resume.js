import React from 'react';
import '../styles/resume.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Miscellaneous from './Miscellaneous';
import resume from '../documents/Wonjong_Park_Resume.pdf'

export default function Resume() {
    return (
        <div>
            <h3>Resume</h3>
            <div className='pt-3'>
                <p className='subtitle'>Download my <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                </p>
            </div>
            <Frontend />
            <Backend />
            <Miscellaneous />
        </div>
    )
}