import React from 'react';
import styles from "./Footer.module.scss";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='container'>
            <div className={styles.footer__main}>
                <div className={styles.footer__first}>
                    <h2>Informations</h2>
                    <Link href="/about">
                        <a>A propos de nous</a>
                    </Link>
                </div>
                <div className={styles.footer__second}>
                    <h2>Suivez nous</h2>
                    <Link href="">
                        <a><BsTwitter fontSize="2em" /></a>
                    </Link>
                    <Link href="">
                        <a><FaFacebookF fontSize="2em" /></a>
                    </Link>
                    <Link href="">
                        <a><GrInstagram fontSize="2em" /></a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;