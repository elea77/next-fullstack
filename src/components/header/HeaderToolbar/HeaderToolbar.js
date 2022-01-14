import React, {useContext, useState} from 'react';
import styles from "./HeaderToolbar.module.scss";
import {FaUser} from 'react-icons/fa';
import {BsFillBasket2Fill} from 'react-icons/bs';
import Link from 'next/link';
import CartContext from '../../../context/CartContext';

const HeaderToolbar = () => {

    const { count } = useContext(CartContext);

    return (
        <nav className={styles.header__toolbar}>
            <ul>
                <li className={styles.dropdown}>
                    <Link href="/login">
                        <a><FaUser fontSize="22px" /></a>
                    </Link>
                    <ul className={styles.dropdown_menu}>
                        <Link href="/profile">
                            <a>Profil</a>
                        </Link>

                        <Link href="/login">
                            <a>Se connecter</a>
                        </Link>

                        <Link href="/register">
                            <a>Créer un compte</a>
                        </Link>
                    </ul>
                </li>
                <li>
                    <Link href="/cart">
                        <a><BsFillBasket2Fill fontSize="22px" /> {count} </a>
                    </Link>
                </li>
                <li></li>
            </ul>
        </nav>
    );
};

export default HeaderToolbar;