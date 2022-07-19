import React from 'react';

const styles = {
    topMenu: {
        textAlign: 'right',
    },
    selected: {
        fontFamily: `'Aladin', cursive`,
        color: 'black',
        backgroundColor: 'var(--light-color)'
    },
    unselected: {
        fontFamily: `'Aladin', cursive`,
        color: 'white'
    }
}

export default function Navbar(props) {
    const navMenus = ['About me', 'Portfolio', 'Contact', 'Resume'];

    console.log("props.selectedMenu", typeof props.selectedMenu, props.selectedMenu);

    return (
        <div style={styles.topMenu}>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    {navMenus.map((menu, i) => (
                        (props.selectedMenu == i) ? (
                            <li className='nav-item' key={i}>
                                <a className='nav-link' style={styles.selected} id={i} onClick={props.eventListener}>
                                    {menu}
                                </a>
                            </li>
                        ) : (
                            <li className='nav-item' key={i}>
                                <a className='nav-link' style={styles.unselected} id={i} onClick={props.eventListener}>
                                    {menu}
                                </a>
                            </li>
                        )

                    ))}
                </ul>
            </div>
        </div>
    )
}