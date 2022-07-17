import React from 'react';

export default function Backend() {
    const backEndTech = [
        'APIs',
        'Node',
        'Express',
        'MySQL, Sequelize',
        'MongoDB, Mongoose',
        'REST',
    ];

    return (
        <div>
            <p>Back-end Proficiencies</p>
            <ul>
                {backEndTech.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}