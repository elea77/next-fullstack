import React from 'react';
import styles from "./HeaderToolbar.module.scss";
import {FaUser} from 'react-icons/fa';
import {BsFillBasket2Fill} from 'react-icons/bs';
import Link from 'next/link';

const HeaderToolbar = () => {
    return (
        <nav className={styles.header__toolbar}>
            <ul>
                <li>
                    <Link href="/login">
                        <a><FaUser /></a>
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <a><BsFillBasket2Fill /></a>
                    </Link>
                </li>
                <li></li>
            </ul>
        </nav>
    );
};

export default HeaderToolbar;