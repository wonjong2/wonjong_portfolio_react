import React from 'react';

export default function Miscellaneous() {
    // List of other techs
    const MiscTech = [
        'Git',
        'Perforce',
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