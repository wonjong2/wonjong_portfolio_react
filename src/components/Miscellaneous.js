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
        <div className='pt-3'>
            <p className='subtitle'> Miscellaneous Proficiencies</p>
            <ul className='items'>
                {MiscTech.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}