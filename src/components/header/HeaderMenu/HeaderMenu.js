import React from 'react';
import Link from 'next/link'

const HeaderMenu = () => {
    return (
        <div className='header__menu'>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                    <a>Shop</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                    <a>Cart</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderMenu;