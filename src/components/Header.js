import React from 'react';
import Navbar from './Navbar';
import '../styles/header.css';

export default function Header(props) {

    return (
        <header>
            {/* Bootstrap Navbar */}
            <nav className="navbar navbar-expand-md navbar-dark custom-navbar">
                <div className="container-fluid ps-0">
                    <h1 id="brand">Wonjong</h1>
                    {/* Passed the index of the selected menu and event listener function to 'Navibar' component*/}
                    <Navbar
                        selectedMenu={props.selectedMenu}
                        eventListener={props.eventListener}
                    />
                </div>
            </nav>
            <div className="background"></div>
        </header>
    );
};