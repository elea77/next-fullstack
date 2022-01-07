import React from 'react';
import Link from 'next/link'
import styles from "./HeaderMenu.module.scss";

const HeaderMenu = () => {
    return (
        <nav className={styles.header__menu}>
            <ul>
                <li>
                    <Link href="/shop">
                    <a>Shop</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenu;