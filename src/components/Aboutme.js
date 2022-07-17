import React from 'react';
import myPhoto from '../images/wonjong.jpg';

export default function Aboutme() {
    return (
        <div>
            <h3>About me</h3>
            <img src={myPhoto} alt="wonjong" className="myphoto pt-3"></img>
            <p className='pt-3' id="aboutme-text">Experienced software engineer with extensive experience in the mobile
                telecommunication industry. From a software engineer who developed Protocol, UI and Network
                features in many feature phones to a project manager who handles entire mobile product lifecycle
                in various mobile devices, resulted in mobile products launched in markets on time with high
                quality and contributed to the growth of the company. Excellent reputation for resolving
                problems and improving customer satisfaction.</p>
        </div>
    )
}