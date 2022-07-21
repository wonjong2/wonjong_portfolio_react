import React from 'react';

export default function Frontend() {
    // List of front-end related techs
    const frontEndTech = [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'React',
        'Bootstrap',
        'Handlebars',
        'Webpack',
        'PWA(Progressive Web Apps)',
        'IndexedDB'
    ];

    return (
        <div className='pt-3'>
            <p className='subtitle'>Front-end Proficiencies</p>
            <ul className='items'>
                {frontEndTech.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}