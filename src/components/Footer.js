import React from 'react';

const styles = {
    font: {
        color: 'white',
        fontSize: '1rem',
    },
    icon: {
        fontSize: '2rem',
    }
}
export default function Footer() {
    return (
        <footer className='container-fluid d-flex flex-column pt-5 pb-3' style={styles.font}>
            <div className='d-flex justify-content-center'>
                {/* Github link */}
                <a className='me-3' href='https://github.com/wonjong2' target='_blank' rel='noreferrer' style={styles.icon}><i className='fa-brands fa-github'></i></a>
                {/* LinkedIn link */}
                <a className='me-3' href='https://www.linkedin.com/in/won-jong-park-a7a45146/' target='_blank' rel='noreferrer' style={styles.icon}><i className="fa-brands fa-linkedin"></i></a>
                {/* Facebook link */}
                <a className='me-3' href='https://www.facebook.com/profile.php?id=100001546078781' target='_blank' rel='noreferrer' style={styles.icon}><i className="fa-brands fa-facebook"></i></a>
            </div>
            <div className='d-flex justify-content-center'>
                <p className='me-3'>Email : <a href='mailto:wonjong2@gmail.com'>wonjong2@gmail.com</a></p>
            </div>
        </footer>
    )
};