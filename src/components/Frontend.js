import React from 'react';

export default function Frontend() {
    const frontEndTech = [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'React',
        'Bootstrap',
    ];

    return (
        <div>
            <p>Front-end Proficiencies</p>
            <ul>
                {frontEndTech.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}