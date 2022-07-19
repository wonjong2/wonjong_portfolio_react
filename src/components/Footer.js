import React from 'react';

const styles = {
    alignIcons: {
        justifyContent: 'center',
    },
    icon: {
        fontSize: '2rem',
    }
}
export default function Footer() {
    return (
        <footer className='container-fluid d-flex pt-5 pb-3' style={styles.alignIcons}>
            <div>
                {/* Github link */}
                <a className='me-3' href='https://github.com/wonjong2' target='_blank' rel='noreferrer' style={styles.icon}><i className='fa-brands fa-github'></i></a>
                {/* LinkedIn link */}
                <a className='me-3' href='https://www.linkedin.com/in/won-jong-park-a7a45146/' target='_blank' rel='noreferrer' style={styles.icon}><i className="fa-brands fa-linkedin"></i></a>
                {/* Facebook link */}
                <a className='me-3' href='https://www.facebook.com/profile.php?id=100001546078781' target='_blank' rel='noreferrer' style={styles.icon}><i className="fa-brands fa-facebook"></i></a>
            </div>
        </footer>
    )
};