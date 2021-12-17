import React from 'react';
import HeaderToolbar from '../header/HeaderToolbar/HeaderToolbar';
import HeaderLogo from '../header/HeaderLogo/HeaderLogo';
import HeaderMenu from '../header/HeaderMenu/HeaderMenu';
import Footer from '../footer/Footer';


const MainLayout = ({children}) => {
    return (
        <>
            <header className='heaser__main'>
                <HeaderLogo />
                <HeaderMenu />
                <HeaderToolbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default MainLayout;