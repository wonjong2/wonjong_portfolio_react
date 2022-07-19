import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

export default function App() {
    const [index, setIndex] = useState(0);

    // Evend handler for clicking nav menus
    const handleClickMenu = (e) => {
        e.preventDefault();
        setIndex(e.target.id);
    }

    return (
        <div>
            <Header
                selectedMenu={index}
                eventListener={handleClickMenu}
            />
            <Section
                selectedMenu={index}
            />
            <Footer />
        </div>
    );
};