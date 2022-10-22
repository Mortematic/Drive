import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../Images/logo_dark.png';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.container}>
                <img src={Logo} alt='/' />
                <button>Refer a Friend</button>
            </div>
        </div>
    )
}

export default Footer