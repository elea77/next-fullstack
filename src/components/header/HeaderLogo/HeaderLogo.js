import React from 'react';
import LogoImg from '../../../assets/images/logo.png';
import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
    return (
        <div className={styles.header__logo}>
            <img src={LogoImg.src} alt="Nike"/>
        </div>
    );
};

export default HeaderLogo;