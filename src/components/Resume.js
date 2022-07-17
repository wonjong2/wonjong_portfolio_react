import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import resume from '../documents/Wonjong_Park_Resume.pdf'

export default function Resume() {

    return (
        <div>
            <h3>Resume</h3>
            <div>
                <p>Download my <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                </p>
            </div>
            <Frontend />
            <Backend />
        </div>
    )
}