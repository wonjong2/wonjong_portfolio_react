import React from 'react';
import '../styles/portfolio.css';

export default function Portfolio() {
    const projects = [
        {
            url: 'https://bens-diner.herokuapp.com/',
            title: `Ben's Diner`,
            class: 'works first-work',
            id: 'first-project'
        },
        {
            url: 'https://levisgaragegroupinc.github.io/translation_app/',
            title: 'Tranlation App',
            class: 'works second-work',
            id: 'second-project'
        },
        {
            url: 'https://tech-blog-wonjong.herokuapp.com/',
            title: 'Tech Blog MVC',
            class: 'works third-work',
            id: 'third-project'
        },
        {
            url: 'https://wonjong2.github.io/Week6_Weather_Dashboard/',
            title: 'Weather Dashboard',
            class: 'works fourth-work',
            id: 'fourth-project'
        },
        {
            url: 'https://wonjong2.github.io/Week5_Work_Day_Scheduler/',
            title: 'Workday Scheduler',
            class: 'works fifth-work',
            id: 'fifth-project'
        }
    ];

    return (
        <div>
            <h3>Portfolio</h3>
            <div className='col-9 pt-3 mx-auto work-detail'>
                {projects.map((project, i) => (
                    <a href={project.url} target='_blank'
                        className={project.class} rel='noreferrer' key={i}>
                        <div className='work-title'>
                            <h4 className='work-text'>{project.title}</h4>
                            <p className='work-text' id={projects.id}>[Go To GitHub <i className='fa-brands fa-github'></i>]
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}