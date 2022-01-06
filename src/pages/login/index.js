import React from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Link from 'next/link';

const Index = () => {
    return (
        <div className='container'>
            <TitlePage title="Login" className='text-center'></TitlePage>
            <div className='text-center'>
                <Input type="email" placeholder="Adresse mail" required="required"></Input>
                <Input type="password" placeholder="Mot de passe"></Input>
                <Button text="CONNEXION"></Button>
            </div>
            <div className='text-center'>
                <Link href="/register"><a>Pas de compte ? Créer un compte</a></Link>
            </div>
        </div>
    );
};

export default Index;
