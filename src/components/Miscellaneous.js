import React from 'react';

export default function Miscellaneous() {
    const MiscTech = [
        'Git',
        'Perforce',
        'Webpack',
        'PWA(Progressive Web Apps)',
        'IndexedDB',
        'C language',
    ];

    return (
        <div>
            <p> Miscellaneous Proficiencies</p>
            <ul>
                {MiscTech.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}