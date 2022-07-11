import React from 'react';
import styles from './Header.module.css';
import logo from './../../images/logo.png';

const Header = (props) => {
    return (
        <div className={styles.headerWrap}>
            <div className={styles.header_element}><a>Header</a></div> 
        </div>
    );
}
export default Header
