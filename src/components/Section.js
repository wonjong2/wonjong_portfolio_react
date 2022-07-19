import React from 'react';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

export default function Section({ selectedMenu }) {
    const renderSection = (menu) => {
        switch (menu) {
            case '0':
                return <Aboutme />
            case '1':
                return <Portfolio />
            case '2':
                return <Contact />
            case '3':
                return <Resume />
            default:
                return <Aboutme />
        }
    }

    return (
        <section className="container-fluid">
            <div className="column">
                <div className="col-10 pt-4 mx-auto">
                    {/* Decide which section to render */}
                    {renderSection(selectedMenu)}
                </div>
            </div>
        </section>
    )
};
