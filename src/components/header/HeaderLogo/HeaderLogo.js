import React from 'react';
import LogoImg from '../../../assets/images/shein-logo.png';
import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
    return (
        <div className={styles.header__logo}>
            <img src={LogoImg.src} alt="Shein"/>
        </div>
    );
};

export default HeaderLogo;