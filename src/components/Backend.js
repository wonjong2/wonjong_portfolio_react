import React from 'react';

export default function Backend() {
    // List of back-end related techs
    const backEndTech = [
        'APIs',
        'Node',
        'Express',
        'MySQL, Sequelize',
        'MongoDB, Mongoose',
        'REST',
    ];

    return (
        <div className='pt-3'>
            <p className='subtitle'>Back-end Proficiencies</p>
            <ul className='items'>
                {backEndTech.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}