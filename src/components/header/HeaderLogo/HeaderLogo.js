import React from 'react';
import LogoImg from '../../../assets/images/shein-logo.png';
import styles from "./HeaderLogo.module.scss";
import Link from 'next/link';

const HeaderLogo = () => {
    return (
        <div className={styles.header__logo}>
            <Link href="/">
                <a><img src={LogoImg.src} alt="Shein" /></a>
            </Link>
        </div>
    );
};

export default HeaderLogo;