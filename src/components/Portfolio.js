import React from 'react';
import '../styles/portfolio.css';

export default function Portfolio() {
    const projects = [
        {
            url: 'https://bens-diner.herokuapp.com/',
            github: 'https://github.com/wonjong2/Bens_Diner',
            title: `Ben's Diner`,
            class: 'works first-work',
        },
        {
            url: 'https://levisgaragegroupinc.github.io/translation_app/',
            github: 'https://github.com/levisgaragegroupinc/translation_app',
            title: 'Tranlation App',
            class: 'works second-work',
        },
        {
            url: 'https://texteditor-pwa-wonjong.herokuapp.com/',
            github: 'https://github.com/wonjong2/PWA_Text_Editor',
            title: 'PWA Text Editor',
            class: 'works third-work',
        },
        {
            url: 'https://tech-blog-wonjong.herokuapp.com/',
            github: 'https://github.com/wonjong2/Tech_Blog_MVC',
            title: 'Tech Blog MVC',
            class: 'works fourth-work',
        },
        {
            url: 'https://wonjong2.github.io/Week6_Weather_Dashboard/',
            github: 'https://github.com/wonjong2/Week6_Weather_Dashboard',
            title: 'Weather Dashboard',
            class: 'works fifth-work',
        },
        {
            url: 'https://wonjong2.github.io/Week5_Work_Day_Scheduler/',
            github: 'https://github.com/wonjong2/Week5_Work_Day_Scheduler',
            title: 'Workday Scheduler',
            class: 'works sixth-work',
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
                            <a className='work-text' href={project.github} target='_blank' rel='noreferrer'>[Go To GitHub <i className='fa-brands fa-github'></i>]
                            </a>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}