import React from 'react';

const styles = {
    alignIcons: {
        justifyContent: 'center',
    },
    icon: {
        fontSize: '2rem',
        color: 'white',
    }
}
export default function Footer() {
    return (
        <footer className='container-fluid d-flex pt-5' style={styles.alignIcons}>
            <div style={styles.icon}>
                <a className='me-3' href='https://github.com/wonjong2' target='_blank' rel='noreferrer'><i className='fa-brands fa-github'></i></a>
                <a className='me-3' href='https://www.linkedin.com/in/won-jong-park-a7a45146/' target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                <a className='me-3' href='https://stackoverflow.com/users/18087428/wonjong-park2' target='_blank' rel='noreferrer'><i className="fa-brands fa-stack-overflow"></i></a>
            </div>
        </footer>
    )
};