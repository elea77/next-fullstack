import React from 'react';
import styles from "./Footer.module.scss";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.footer__main}>
            <div className='container'>
                <div>
                    <h2>Informations</h2>
                    <Link href="/about">
                        <a>A propos de nous</a>
                    </Link>
                </div>
                <div>
                    <h2>Suivez nous</h2>
                    <BsTwitter />
                    <FaFacebookF />
                    <GrInstagram />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Footer;